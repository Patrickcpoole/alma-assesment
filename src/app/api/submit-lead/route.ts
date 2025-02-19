import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const linkedin = formData.get("linkedin") as string;
    const country = formData.get("country") as string;
    const visaCategories = JSON.parse(formData.get("visaCategories") as string);
    const message = formData.get("message") as string;
    const resume = formData.get("resume") as File;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !linkedin ||
      !country ||
      !message ||
      !resume
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uniqueId = uuidv4();
    const fileExtension = resume.name.split(".").pop();
    const fileName = `${uniqueId}.${fileExtension}`;

    const uploadDir = join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    await writeFile(join(uploadDir, fileName), buffer);

    const lead = {
      id: uniqueId,
      firstName,
      lastName,
      email,
      linkedin,
      country,
      visaCategories,
      resumeUrl: `/uploads/${fileName}`,
      message,
      status: "PENDING" as const,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
