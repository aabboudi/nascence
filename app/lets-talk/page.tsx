import LetsTalkForm from "@/components/lets-talk-form";
import { SectionTitle } from "@/components/section-title";

export default function LetsTalkPage() {
  return (
    <main>
      <SectionTitle
        isHero
        badge="Let's Talk"
        title="Let's Talk"
        subtitle="We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, our team is here to assist you. Fill out the form below and we'll get back to you as soon as possible."
      />
      <LetsTalkForm />
    </main>
  );
}
