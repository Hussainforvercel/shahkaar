import { NextResponse } from "next/server";

// In-memory waitlist cache for runtime deduplication.
// In production, integrate with Resend, Mailchimp, Supabase, or PostgreSQL.
const waitlistRegistry = new Set<string>();

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request payload. Please provide an email address.",
        },
        { status: 400 }
      );
    }

    const rawEmail = body.email;

    if (!rawEmail || typeof rawEmail !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "Email address is required.",
        },
        { status: 400 }
      );
    }

    const email = rawEmail.trim().toLowerCase();

    if (email.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Email address cannot be empty.",
        },
        { status: 400 }
      );
    }

    if (email.length > 254 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const isExisting = waitlistRegistry.has(email);
    waitlistRegistry.add(email);

    // Placeholder hook: Connect to third-party providers here:
    // e.g. await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID });
    // e.g. await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, { email_address: email, status: 'subscribed' });

    return NextResponse.json(
      {
        success: true,
        message: isExisting
          ? "You are already on the VIP waitlist for shahkaar.store."
          : "You're on the VIP list for shahkaar.store. We will notify you prior to public opening.",
        email,
        isExisting,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      store: "shahkaar.store",
      status: "active",
      message: "Waitlist API endpoint is operational. Submit POST requests with { email }.",
    },
    { status: 200 }
  );
}
