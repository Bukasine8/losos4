export const faqData = {
    general: [
        {
            question: "What industries do you serve?",
            answer: "We provide engineering consulting services across a wide range of industries including commercial construction, industrial manufacturing, residential development, and public infrastructure projects. Our versatile team is equipped to handle the unique challenges of each sector.",
        },
        {
            question: "Where are you located and do you travel?",
            answer: "Our headquarters is based in Losos4, but we operate globally. Yes, our team is available for on-site consultations and project management worldwide, depending on the project requirements.",
        },
        {
            question: "How do I request a consultation?",
            answer: "You can request a consultation by clicking the 'Book Consultation' button in the navigation bar or by visiting our Contact page. We offer both initial virtual meetings and in-person site assessments.",
        },
    ],
    services: [
        {
            question: "What mechanical engineering services do you offer?",
            answer: "Our mechanical engineering services include HVAC system design, energy modeling, plumbing and piping design, and fire protection systems. We focus on energy efficiency and sustainable design practices.",
        },
        {
            question: "Do you offer full project management?",
            answer: "Yes, we offer end-to-end project management. From the initial feasibility studies and design to contractor selection and construction supervision, we ensure your project is delivered on time and within budget.",
        },
        {
            question: "Can you help with LEED certification?",
            answer: "Absolutely. We are experts in sustainable building practices and can guide your project through the LEED certification process, from design optimization to documentation and submission.",
        },
    ],
    workflow: [
        {
            question: "What is your typical project timeline?",
            answer: "Timelines vary significantly depending on scope and complexity. A small renovation might take weeks, while a large commercial development could take months or years. We provide a detailed project schedule during our initial proposal phase.",
        },
        {
            question: "How do you handle design changes during a project?",
            answer: "We understand that needs evolve. We have a structured change order process that ensures transparency. We will evaluate the impact on cost and schedule and seek your approval before proceeding with any significant changes.",
        },
    ],
    certifications: [
        {
            question: "Are your engineers licensed?",
            answer: "Yes, all our lead engineers are licensed Professional Engineers (PE) in their respective disciplines and states of practice. We maintain rigorous continuous education to stay current with codes and standards.",
        },
        {
            question: "What compliance standards do you adhere to?",
            answer: "We strictly adhere to all local, state, and international building codes, including IBC, NEC, NFPA, and ASHRAE standards, ensuring safety and legal compliance for every project.",
        },
    ],
    billing: [
        {
            question: "How do you structure your fees?",
            answer: "We offer flexible billing structures depending on the project type, including hourly rates, fixed-fee lump sums, or percentage of construction cost. We work with you to find the model that best fits your budget and preferences.",
        },
        {
            question: "Do you require a retainer?",
            answer: "Typically, we require a retainer upon signing the service agreement to schedule resources and commence work. This amount is credited towards your final invoice.",
        },
    ],
    technical: [
        {
            question: "What software do you use for design?",
            answer: "We utilize industry-standard software such as Autodesk Revit for BIM, AutoCAD for 2D drafting, and customized simulation tools for energy and structural analysis to ensure precision and compatibility.",
        },
        {
            question: "Can you work with existing BIM models?",
            answer: "Yes, we can integrate with your existing BIM workflows. We are fully capable of importing, auditing, and continuing work on Revit models provided by other architects or engineers.",
        },
    ],
};

export type FAQCategory = keyof typeof faqData;
