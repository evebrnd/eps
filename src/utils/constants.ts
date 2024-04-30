import {
    mdiRobotConfused,
    mdiChip,
    mdiInformationSlabBoxOutline,
    mdiChatQuestionOutline,
    mdiCogOffOutline,
    mdiHandBackLeftOffOutline,
    mdiLightbulbOnOutline  
} from "@mdi/js";

export const components_about: { title: string; href: string; description: string }[] = [
    {
        title: "Our team",
        href: "/about/us",
        description:
            "Our project and the team behind it.",
    },
    {
        title: "RELINK",
        href: "/about/relink",
        description:
            "The RELINK project.",
    },
    {
        title: "EPS",
        href: "/about/eps",
        description:
            "What is the European Project Semester?",
    }
]

export const components_chapters: { title: string; href: string; description: string, icon: string }[] = [
    {
        title: "Kick-off",
        href: "/chapters/kickoff",
        description:
            "What this lesson is about.",
        icon: mdiInformationSlabBoxOutline,
    },
    {
        title: "1. Introduction",
        href: "/chapters/one",
        description:
            "What is a smart home device?",
        icon: mdiChatQuestionOutline,
    },
    {
        title: "2. Opinions and studies",
        href: "/chapters/two",
        description:
            "Thoughts of the general public on smart home devices.",
        icon: mdiHandBackLeftOffOutline,
    },
    {
        title: "3. Transparency",
        href: "/chapters/three",
        description:
            "What it means and why it is important.",
        icon: mdiLightbulbOnOutline,

    },
    {
        title: "4. Internal workings",
        href: "/chapters/four",
        description:
            "Internals working of smart home devices.",
        icon: mdiChip,
    },
    {
        title: "5. Artificial Intelligence",
        href: "/chapters/five",
        description:
            "The role of AI in smart home devices.",
        icon: mdiRobotConfused,
    },
    {
        title: "6. Usabilities and Dangers",
        href: "/chapters/six",
        description:
            "The usabilities and dangers of smart home devices.",
        icon: mdiCogOffOutline,
    },
    {
        title: "Resources",
        href: "/chapters/resources",
        description:
            "To go further on resources for privacy in smart homes.",
        icon: mdiCogOffOutline,
    }
]