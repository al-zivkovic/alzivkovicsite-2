const projects = [
    {
      name: "CalVision",
      description: "Developed an iOS app that allows users to track their caloric intake and progress towards their fitness goals. The app features an AI image recognition system that can identify food items and their caloric content.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Expo",
          color: "green-text-gradient",
        },
        {
            name: "Elixir",
            color: "pink-text-gradient",
        },
        {
          name: "OpenAI",
          color: "pink-text-gradient",
        },
      ],
      image: "/calvision.png",
      deployed_link: "https://calvision.app/",
      source_code_link: "https://github.com/al-zivkovic/"
    },
    {
      name: "Nailify",
      description: "Developed an iOS and Android app that allows users to take photos of their nails and customize them with different colors and patterns. Using AI, the app will generate an image based on the user's input.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Expo",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI",
          color: "pink-text-gradient",
        },
      ],
      image: "/nailify.png",
      deployed_link: "https://github.com/al-zivkovic/nailai-app"
    },
    {
      name: "Excel Normalization Tool",
      description: "Developed a Python application that normalizes data in LoneWolf exported Excel files to a format that can be used by the company's backend.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        }
      ],
      image: "/github.png",
      deployed_link: "https://github.com/al-zivkovic/excel-normalization-tool",
    }
  ];

const experience = [
  {
    company: "Iluminai Intelligence Corporation",
    position: "Junior Software Developer (Support)",
    startDate: "October, 2024",
    endDate: "Present",
    location: "Vancouver, Canada (On-site)",
    image: "/iluminai.jpg",
    descriptionPoints: [
      "Developed the React Native mobile app, replacing web portal logins with an App Store solution that reduced client processing time and accelerated the platform's adoption across brokerages.",
      "Managed mobile app releases and updates for iOS and Android, ensuring compliance with App Store and Play Store policies for every version release.",
      "Developed optimized SQL queries to enhance data retrieval and metric analysis, reducing computational overhead and lowering company costs.",
      "Localized the Elixir platform for French-Canadian (i18n/l10n) markets, integrating FINTRAC AML/KYC workflows in biligual format, expanding company revenue from Quebec-based real estate brokerages.",
      "Built a Python-based Excel Normalization desktop app for automated, rule-based data cleaning and normalization. Implemented data validation, transformation and deduplication pipelines using Pandas DataFrames, significantly reducing manual preparation time.",
      "Automated weekly business intelligence reports for the company's largest client, freeing resources for higher-impact projects.",
      "Followed semantic Git practices (feature branches, PR templates) to minimize CI/CD pipeline errors and accelerate hotfix deployments.",
      "Revamped and centralized internal knowledge base and GitHub Wiki, reducing support ticket resolution time and improving onboarding efficiency."
    ]
  },
];

export { projects, experience };