import Button from "@/components/ui/Button";

import Link from "next/link";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
export default function Home() {
  return (
    <>
      <nav className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center">
              <span className="text-4xl font-bold">almă</span>
            </Link>
            <div className="flex space-x-8">
              <Button href="/assessment" size="lg">
                Get Assessment
                <ArrowRightIcon width="22" height="22" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-secondary mb-6">
              Immigration Made Simple
            </h1>
            <p className="text-xl text-primary mb-8 max-w-2xl mx-auto">
              Get expert guidance on O-1, EB-1A, and EB-2 NIW visas. Our
              experienced team helps extraordinary individuals navigate their US
              immigration journey.
            </p>
            <Button href="/assessment">Get Your Assessment</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Expert Evaluation",
                description:
                  "Get a thorough assessment of your qualifications and visa options",
              },
              {
                title: "Personalized Guidance",
                description:
                  "Receive tailored advice based on your unique circumstances",
              },
              {
                title: "Streamlined Process",
                description:
                  "Navigate the immigration process with clear steps and support",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-foreground p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-white text-secondary rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-secondary/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards your US visa by getting a professional
              assessment of your case.
            </p>
            <Button href="/assessment">Get Started</Button>
          </div>
        </div>
      </main>
    </>
  );
}
