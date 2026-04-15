export const en = {
  lang: "en",
  langLabel: "English",

  ui: {
    languageSwitcher: "Language",

    nav: {
      home: "Colonoscopy Companion",
      whatIsIt: "What Is It?",
      cancerPolyps: "Cancer & Polyps",
      screening: "Screening",
      prepGuide: "Prep Guide",
      whatToExpect: "What to Expect",
      comfort: "Comfort",
      safety: "Safety",
      faq: "FAQ",
    },

    common: {
      backToHome: "Back to Home",
    },

    home: {
      badge: "Free patient education tool",
      cta1: "Go to Prep Guide",
      cta2: "Learn the Basics",
      sectionHeading: "Everything You Need to Know",
      sectionSubtitle:
        "From understanding the procedure to preparing for it — clear, step-by-step guidance for every stage.",
      trustHeading: "Evidence-Based Information You Can Trust",
      trustSubtitle:
        "Built on current Canadian guidelines to give you accurate, reliable information about your procedure.",
      trustPoints: [
        "Evidence-based content from current CAG and BC Cancer guidelines",
        "Created and reviewed by a Canadian gastroenterologist",
        "Regularly updated to reflect the latest screening recommendations",
      ],
      cagGuidelines: "CAG Guidelines",
      bcCancerScreening: "BC Cancer Screening Program",
      lastUpdated: "Last Updated: April 2026",
    },

    footer: {
      tagline:
        "Helping patients understand and prepare for their colonoscopy with clear, evidence-based information.",
      quickLinks: "Quick Links",
      links: {
        prepGuide: "Prep Guide",
        whatToExpect: "What to Expect",
        comfortAnxiety: "Comfort & Anxiety",
        risksSafety: "Risks & Safety",
        faq: "FAQ",
        screeningGuidelines: "Screening Guidelines",
        forHealthcareProviders: "For Healthcare Providers",
      },
      importantNotice: "Important Notice",
      importantNoticeText:
        "Always follow the specific instructions provided by your gastroenterologist. If they differ from this guide, your doctor's instructions take priority.",
      disclaimer: "Medical Disclaimer:",
      disclaimerText:
        "This website provides general educational information about colonoscopy and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.",
      createdBy: "Created by a Canadian gastroenterologist. Last reviewed: April 2026.",
    },

    prepChecklist: {
      allDone: "All done! Great job.",
    },

    feedback: {
      wasHelpful: "Was this page helpful?",
      yes: "Yes",
      no: "No",
      howImprove: "How could we improve this page?",
      placeholder: "Optional — share any suggestions...",
      submit: "Submit",
      submitting: "Sending...",
      thankYou: "Thank you for your feedback!",
    },

    bowelPrepScale: {
      heading: "How Is My Prep Going?",
      subtitle: "Use this visual guide to check if your prep solution is working",
      scoreLabel: "Score",
      infoText:
        "Your prep should look like Score 2 or 3 (clear to slightly cloudy yellow) before your procedure. If your output is still dark or has solid material, continue drinking clear fluids.",
      tipText:
        "Remember: the better your prep, the more your doctor can see. Good prep = better protection.",
    },

    countdown: {
      heading: "My Procedure Countdown",
      subtitle: "Enter your procedure date to get a personalized prep timeline",
      dateLabel: "Procedure date",
      clear: "Clear",
      daysUntil: "days until your procedure",
      dayUntil: "day until your procedure",
      booked: "Booked",
      procedureDay: "Procedure day",
      today: "Today",
      tomorrow: "Tomorrow",
      daysAway: "days away",
      task1Label: "Your #1 task:",
      focusNow: "Here's what to focus on right now:",
      comingUp: "Coming up",
      inDaysTemplate: "In %d days",
      completeHeading: "Procedure complete!",
      completeText:
        "We hope everything went well. Remember to follow your doctor's post-procedure instructions and attend any follow-up appointments.",
      empty: "Enter your procedure date above to see your personalized prep timeline",
    },

    doctorQuestions: {
      heading: "Questions to Ask Your Doctor",
      subtitle:
        "Check the questions you'd like to remember to ask at your appointment",
      clearAll: "Clear All",
      printList: "Print This List",
      yourNotes: "Your Notes",
      notesPlaceholder: "Write any additional questions or notes here...",
      selectedOf: (checked: number, total: number) =>
        `${checked} of ${total} selected`,
    },

    whatIsColonoscopy: {
      anatomyHeading: "Understanding the Anatomy",
      anatomyCaption:
        "During a colonoscopy, the scope travels from the rectum through the entire colon to the cecum, examining every section along the way.",
      nextLink: "Next: Cancer & Polyps",
    },

    colonCancerPolyps: {
      polypVisualHeading: "Visual Guide: Polyp Types",
      polypVisualCaption: "How different polyp types appear on the colon wall",
      riskLabel: "risk",
      prevLink: "What Is a Colonoscopy?",
      nextLink: "Screening Guidelines",
    },

    screeningGuidelines: {
      sourcesHeading: "Sources & Further Reading",
      findingHeader: "Finding",
      nextColonoscopyHeader: "Next Colonoscopy",
      prevLink: "Cancer & Polyps",
      nextLink: "Prep Instructions",
    },

    prepPage: {
      importantWarning:
        "Important: Always confirm medication changes with your doctor. Never stop or change medications on your own.",
      okToHave: "OK to have",
      avoid: "Avoid",
      prevLink: "Screening Guidelines",
      nextLink: "What to Expect",
    },

    whatToExpect: {
      prevLink: "Prep Instructions",
      nextLink: "Comfort & Anxiety",
    },

    comfortAnxiety: {
      prevLink: "What to Expect",
      nextLink: "Risks & Safety",
    },

    risksAndSafety: {
      prevLink: "Comfort & Anxiety",
      nextLink: "FAQ",
    },

    faq: {
      stillHaveQuestionsHeading: "Still have questions?",
      stillHaveQuestionsText:
        "Contact your gastroenterologist's office. They're happy to answer any questions specific to your situation and help you feel prepared.",
      prevLink: "Risks & Safety",
      nextLink: "Back to Home",
    },

    shareRide: {
      message:
        "I'm having a colonoscopy soon and will need a ride home afterward because of sedation. Here's info about what to expect: colonoscopycompanion.ca/what-to-expect",
      copied: "Copied to clipboard!",
      buttonLabel: "Share with my ride",
    },

    printButton: {
      label: "Print This Guide",
    },
  },

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    title: "Colonoscopy Companion",
    subtitle:
      "Your friendly guide to understanding and preparing for your colonoscopy",
    description:
      "Everything you need to know — from why it's recommended to what to expect on the day. Clear, trustworthy information to help you feel confident and prepared.",
  },

  // ── Sections (mirrors sections.json) ─────────────────────────────────────
  sections: [
    {
      id: "what-is-colonoscopy",
      title: "What Is a Colonoscopy?",
      subtitle: "A simple look at the procedure",
      icon: "🔬",
      color: "teal",
      summary:
        "A colonoscopy is a safe, common procedure. Your doctor looks inside your colon using a small camera. It takes about 30 minutes, and you sleep through it.",
      content: {
        intro:
          "A colonoscopy lets your doctor look inside your large intestine (colon). They use a thin, flexible tube with a tiny camera on the end. The doctor who does this is called a gastroenterologist — a stomach and bowel doctor.",
        keyPoints: [
          {
            heading: "It's quick",
            text: "The procedure takes about 20 to 30 minutes. Plan to be at the clinic for 2 to 3 hours total.",
          },
          {
            heading: "You'll be comfortable",
            text: "You get sleep medicine (sedation) through an IV. You will be relaxed or asleep. Most people don't remember it at all.",
          },
          {
            heading: "It's the best test",
            text: "A colonoscopy is the best way to check your colon. It can find and remove growths (polyps) in the same visit.",
          },
          {
            heading: "It saves lives",
            text: "Regular screening finds problems early, when they are easiest to treat. This helps prevent colon cancer.",
          },
        ],
        procedure: {
          heading: "How it works",
          steps: [
            "You change into a gown and lie on your left side (this is standard — if you have a shoulder or other concern, let your care team know and they can accommodate you)",
            "A nurse starts an IV and gives you sleep medicine",
            "The doctor gently puts the camera tube into your colon",
            "The doctor looks at your colon on a video screen",
            "If growths (polyps) are found, they are removed right away — you won't feel it",
            "The tube is taken out and you go to the recovery room",
          ],
        },
      },
    },
    {
      id: "colon-cancer-polyps",
      title: "Colon Cancer & Polyps",
      subtitle: "Why early detection matters",
      icon: "🛡️",
      color: "blue",
      summary:
        "Colon cancer is the 3rd most common cancer in Canada. But it is one of the most preventable. Finding and removing polyps early stops cancer before it starts.",
      content: {
        intro:
          "Colon cancer grows in the large intestine or rectum. Most of the time, it starts as a small growth called a polyp. Not all polyps turn into cancer. But removing them gets rid of the risk.",
        stats: {
          heading: "Colon cancer in Canada",
          items: [
            "It's the 3rd most common cancer in Canada",
            "About 1 in 14 men and 1 in 18 women will get it in their lifetime",
            "When found early (Stage I), more than 9 out of 10 people survive",
            "When found late (Stage IV), only about 1 in 7 people survive",
            "Regular screening can prevent up to 60% of deaths from colon cancer",
          ],
        },
        polyps: {
          heading: "What are polyps?",
          intro:
            "Polyps are small growths inside the colon. They are very common — about 1 in 3 people over age 50 have them.",
          types: [
            {
              name: "Hyperplastic polyps",
              risk: "Low",
              description:
                "Usually small. Found in the lower colon. These almost never turn into cancer.",
            },
            {
              name: "Adenomatous polyps (adenomas)",
              risk: "Moderate",
              description:
                "The most common type that can turn into cancer over 10 to 15 years. This is why they are removed during a colonoscopy.",
            },
            {
              name: "Sessile serrated polyps",
              risk: "Moderate to High",
              description:
                "Flat growths that can be harder to see. They have a higher chance of becoming cancer. This is why a thorough exam matters.",
            },
          ],
        },
        prevention: {
          heading: "The polyp-to-cancer journey",
          text: "Most colon cancers grow slowly from polyps over 10 to 15 years. This slow growth is why screening works so well. There is a big window of time to find and remove polyps before they become dangerous. A colonoscopy stops this process by removing polyps during the exam.",
        },
      },
    },
    {
      id: "screening-guidelines",
      title: "Screening Guidelines",
      subtitle: "When and how often to get screened",
      icon: "📋",
      color: "indigo",
      summary:
        "In British Columbia, colon cancer screening starts at age 50. Your colonoscopy is covered by MSP at no cost when ordered by a doctor.",
      content: {
        intro:
          "Screening means checking for cancer or polyps before you have any symptoms. In Canada, screening is recommended starting at age 50 for people at average risk.",
        bcProgram: {
          heading: "BC Colon Screening Program",
          items: [
            "BC recommends a stool test (FIT test) every 2 years starting at age 50",
            "If your FIT test is positive, you will be sent for a colonoscopy",
            "If you have higher risk factors, your doctor may start screening earlier",
            "A colonoscopy ordered by a doctor is fully covered by MSP — there is no cost to you",
          ],
        },
        riskFactors: {
          heading:
            "You may need earlier or more frequent screening if you have",
          items: [
            "A parent, brother, sister, or child who had colon cancer or advanced polyps",
            "A personal history of polyps or colon cancer",
            "Inflammatory bowel disease (Crohn's disease or ulcerative colitis)",
            "Certain genetic conditions (Lynch syndrome, FAP)",
            "Symptoms like blood in your stool, weight loss you can't explain, or changes in bowel habits",
          ],
        },
        frequency: {
          heading: "How often do you need a colonoscopy?",
          items: [
            { scenario: "Normal result (no polyps)", interval: "Every 10 years" },
            { scenario: "1-2 small polyps", interval: "Every 5-10 years" },
            {
              scenario: "3-10 polyps or advanced polyps",
              interval: "Every 3 years",
            },
            { scenario: "More than 10 polyps", interval: "Within 1 year" },
            {
              scenario: "Family history of colon cancer",
              interval:
                "Starting at age 40 or 10 years before the youngest family member who had it",
            },
          ],
        },
      },
    },
    {
      id: "prep-instructions",
      title: "Prep Instructions",
      subtitle: "Your step-by-step preparation guide",
      icon: "✅",
      color: "emerald",
      summary:
        "Good prep is the most important thing you can do for a successful colonoscopy. Follow these steps carefully for the best results.",
      content: {
        intro:
          "How well you prep affects what your doctor can see. A clean colon means a better exam, fewer missed polyps, and less chance of needing to repeat the procedure.",
        timeline: [
          {
            when: "7 days before",
            heading: "One week out",
            items: [
              "Pick up your prep solution from the pharmacy — your GI doctor's office will have sent a prescription for you",
              "Stop taking iron pills (they make your colon hard to see)",
              "Set up a ride home — you cannot drive after sedation. If you plan to take a taxi or rideshare, someone you know must accompany you as an escort; a driver alone does not count",
              "Buy clear liquids: broth, Jello, apple juice, sports drinks, popsicles",
              "Start avoiding high-fibre foods: raw vegetables, corn, nuts, seeds, rice, quinoa, whole grains, popcorn — your GI office prep sheet includes a more complete list",
            ],
          },
          {
            when: "3 days before",
            heading: "Three days out",
            items: [
              "Avoid red or purple drinks and Jello (they can look like blood during the exam)",
              "Eat low-fibre foods: white bread, eggs, chicken, fish, cheese, yogurt",
            ],
          },
          {
            when: "1 day before",
            heading: "The day before",
            items: [
              "Drink only clear liquids for the entire day (see the clear liquids list below)",
              "Start drinking your prep solution as directed — usually in the afternoon or evening, depending on your procedure time the next day",
              "Stay near a bathroom — the prep works quickly",
              "Keep drinking clear fluids to stay hydrated",
              "Your stool should become clear or light yellow by the end",
            ],
          },
          {
            when: "Morning of",
            heading: "Procedure day",
            items: [
              "Drink the second half of your prep (usually early morning)",
              "Do not eat or drink after you finish your prep (or as told)",
              "Take must-have medications with a small sip of water (ask your doctor which ones)",
              "Wear comfortable, loose clothes",
              "Bring your health card and a list of your medications",
              "Make sure your ride is ready to take you home — plan for about 2 to 3 hours from your arrival time",
            ],
          },
        ],
        foodGuide: {
          heading: "Foods you can and cannot eat — starting 1 week before",
          avoid: [
            "Whole grain breads with visible grains, seeds, or nuts",
            "Fibre supplements (e.g. Metamucil, Benefibre)",
            "Nuts (all) and seeds (all)",
            "Rice (all types), quinoa, couscous, congee",
            "Beans (all) and lentils (all)",
            "Berries (all), berry smoothies, and jams with seeds",
            "Corn, popcorn, oats, oatmeal, granola",
            "Tomatoes and cucumber (unless all seeds are removed)",
          ],
          allowed: [
            "White or brown bread with no visible grains, seeds, or nuts",
            "Dairy products: cheese, yogurt, ice cream",
            "Eggs, tofu, fish, seafood, meat (all types)",
            "Roti, naan, pita, pasta, noodles (all types)",
            "Smooth nut butters, hummus, tzatziki",
            "Seedless jams and jellies",
            "Fruits: apples, bananas, mango, oranges, peaches, pears, grapefruit, nectarines, seedless grapes and watermelon",
            "Vegetables: spinach, kale, cauliflower, broccoli, potatoes, yams, carrots, peas, green beans, lettuce, brussels sprouts, bell peppers (seeds removed)",
          ],
        },
        clearLiquids: {
          heading: "What counts as a clear liquid?",
          allowed: [
            "Water",
            "Clear broth (chicken, beef, vegetable)",
            "Apple juice (no pulp)",
            "White grape juice",
            "White cranberry juice",
            "Ginger ale, Sprite, 7-Up",
            "Gatorade (green, yellow, or orange only)",
            "Black coffee or black/clear tea (no milk or cream)",
            "Jell-O (green, yellow, or orange only)",
            "Popsicles (not red, blue, or purple)",
            "Hard candies",
          ],
          avoid: [
            "Milk, cream, or milk alternatives (coconut, almond, soy, cashew milk)",
            "Orange juice or any juice with pulp",
            "Red, blue, or purple drinks or Jell-O of any kind",
            "Alcohol",
            "Smoothies or protein shakes",
            "Coconut water",
            "Anything you cannot see through",
          ],
        },
        medications: {
          heading: "Medications to talk to your doctor's office about",
          items: [
            {
              med: "Blood thinners (e.g. Warfarin, Eliquis, Xarelto)",
              note: "Talk with your doctor's office about exactly when to stop — timing is specific to you and your medication",
            },
            {
              med: "Diabetes medications (e.g. insulin, metformin)",
              note: "You may need to adjust your dose since you will be fasting — check with your doctor's office",
            },
            {
              med: "Iron pills",
              note: "Stop 7 days before your procedure",
            },
            {
              med: 'Aspirin 81 mg ("baby aspirin")',
              note: "Usually OK to continue taking as normal. If you take a higher dose of aspirin, check with your doctor's office",
            },
            {
              med: "Any other medications or supplements",
              note: "If you take anything not listed here, check with your doctor's office before your procedure — do not assume it is safe to continue",
            },
          ],
        },
      },
    },
    {
      id: "what-to-expect",
      title: "What to Expect",
      subtitle: "Before, during, and after your procedure",
      icon: "🏥",
      color: "sky",
      summary:
        "Knowing what will happen helps you feel less worried. Here is a step-by-step look at your colonoscopy day.",
      content: {
        phases: [
          {
            phase: "Before",
            icon: "📝",
            items: [
              "You check in at the endoscopy unit and change into a hospital gown",
              "A nurse goes over your health history, medications, and allergies",
              "An IV line is placed in your arm for sleep medicine and fluids",
              "You meet your doctor and care team",
              "You sign a consent form — feel free to ask any questions",
            ],
          },
          {
            phase: "During",
            icon: "⏱️",
            items: [
              "You lie on your left side on a stretcher",
              "Sleep medicine is given through your IV — you feel drowsy in moments",
              "Most patients are asleep or very relaxed the whole time",
              "The procedure takes about 20 to 30 minutes",
              "If polyps are found, they are removed during the exam — you won't feel it",
              "Small tissue samples (biopsies) may be taken — also painless",
            ],
          },
          {
            phase: "After",
            icon: "🛋️",
            items: [
              "You rest in the recovery area for 30 to 60 minutes as the sleep medicine wears off",
              "You may feel bloated or gassy — this is normal and goes away quickly",
              "Your doctor shares the results before you leave",
              "If biopsies were taken, results usually come back in 1 to 2 weeks",
              "You can eat after the procedure (start with something light)",
              "Do not drive, use machines, or make big decisions for 24 hours",
              "You need a responsible adult to take you home — a taxi alone is not accepted at most centres",
            ],
          },
        ],
        afterPolyps: {
          heading: "If polyps were removed",
          items: [
            "Avoid heavy lifting and hard exercise for 3 to 5 days",
            "Do not take blood thinners or pain drugs until your doctor says it is safe",
            "A small amount of blood in your first bowel movement is normal",
            "Call your doctor if you have heavy bleeding, bad belly pain, or fever",
          ],
        },
      },
    },
    {
      id: "comfort-and-anxiety",
      title: "Comfort & Anxiety",
      subtitle: "Managing anxiety about your colonoscopy",
      icon: "💬",
      color: "teal",
      summary:
        "It is completely normal to feel nervous. Here you will find tips to manage anxiety, what to expect from sleep medicine, and words from patients who have been through it.",
      content: {},
    },
    {
      id: "risks-and-safety",
      title: "Risks & Safety",
      subtitle: "Understanding colonoscopy safety",
      icon: "🛡️",
      color: "blue",
      summary:
        "A colonoscopy is one of the safest procedures in medicine. Learn about the rare risks, how they are handled, and warning signs to watch for after.",
      content: {},
    },
    {
      id: "faq",
      title: "Frequently Asked Questions",
      subtitle: "Answers to common concerns",
      icon: "❓",
      color: "amber",
      summary:
        "Got questions? You are not alone. Here are answers to the most common things patients ask.",
      content: {
        questions: [
          {
            q: "Will it hurt?",
            a: "No. You get sleep medicine, so you won't feel pain. Some people feel mild bloating or cramping afterward, but it goes away quickly. Most patients say the prep was the hardest part — not the procedure itself.",
          },
          {
            q: "Can I drive myself home?",
            a: "No. The sleep medicine affects your thinking for up to 24 hours, even if you feel fine. You need a responsible adult to take you home. Most centres will cancel your procedure if you don't have a ride set up.",
          },
          {
            q: "What if I have diabetes?",
            a: "Tell your doctor well ahead of time. You may need to change your diabetes medications since you will be fasting. Check your blood sugar more often on prep day. Clear drinks with some sugar (like apple juice or sports drinks) can help keep your levels up.",
          },
          {
            q: "What if my prep isn't working?",
            a: "Give it time — it can take 1 to 3 hours to start. Walk around to help get things moving. Make sure you are drinking the prep as directed, not too slowly. If nothing is happening after several hours, call your doctor's office.",
          },
          {
            q: "How do I make the prep taste better?",
            a: "Chill it in the fridge. Drink it through a straw. Suck on a hard candy or lemon between glasses. Some people find it easier to drink it quickly. Ask if your prep can be mixed with a clear flavoured drink.",
          },
          {
            q: "What medications should I stop?",
            a: "This depends on what you take. Blood thinners usually need to stop 3 to 7 days before. Iron pills should stop 7 days before. Always check with your doctor — never stop medications on your own.",
          },
          {
            q: "What if they find something?",
            a: "If polyps are found, they are usually removed right away. This is actually a good thing — it stops them from becoming cancer. Your doctor will go over the findings before you go home. Biopsy results take 1 to 2 weeks.",
          },
          {
            q: "How often will I need another colonoscopy?",
            a: "It depends on what is found. If everything looks normal, you may not need another one for 10 years. If polyps are found, your doctor will suggest a shorter wait — usually 3 to 5 years.",
          },
          {
            q: "Is a colonoscopy covered by MSP in BC?",
            a: "Yes. When a doctor orders your colonoscopy, MSP covers it fully. There is no cost to you for the procedure. The prep solution is a prescription that you buy at the pharmacy.",
          },
          {
            q: "Can I take the day off work?",
            a: "You should take the full day off on procedure day. Most people also stay home the day before for the prep. You can usually go back to normal the day after.",
          },
          {
            q: "What is a split prep and why is it recommended?",
            a: "Split prep means you drink half the prep the evening before and half early in the morning on procedure day. Studies show this cleans your colon much better than drinking it all the night before. It is the recommended way to prep.",
          },
          {
            q: "I have sleep apnea — does that affect sedation?",
            a: "Yes. Please tell your care team before the procedure. You may need extra monitoring. Bring your CPAP machine to the clinic — some centres use it during recovery.",
          },
          {
            q: "Can I brush my teeth before the procedure?",
            a: "Yes. Just be careful not to swallow any water. You can also use mouthwash.",
          },
          {
            q: "What is the difference between a FIT test and a colonoscopy?",
            a: "A FIT test checks for hidden blood in your stool. You do it at home. If it is positive, you get a colonoscopy. A colonoscopy looks inside the colon directly and can find and remove polyps in the same visit.",
          },
          {
            q: "Can I take my morning blood pressure or heart medication?",
            a: "Usually, yes. Take important medications like blood pressure pills and heart drugs with a small sip of water on the morning of your procedure. Always check with your doctor first.",
          },
          {
            q: "How long until I get the biopsy results?",
            a: "Results usually take 1 to 2 weeks. Your doctor's office will contact you. If you haven't heard back in 2 weeks, call them to follow up.",
          },
        ],
      },
    },
  ],

  // ── Comfort & Anxiety page (hardcoded content) ────────────────────────────
  comfortAnxiety: {
    pageTitle: "Feeling Nervous? You're Not Alone",
    pageSubtitle: "Managing anxiety about your colonoscopy",
    validationText:
      "It is completely normal to feel nervous. Up to half of all patients feel anxious before a colonoscopy. The good news? Almost everyone says it was much easier than they expected. The worry is almost always worse than the procedure itself.",

    patientsHeading: "What Patients Actually Say Afterward",
    quotes: [
      {
        text: "\u201cI don\u2019t remember any of it. I fell asleep and woke up in recovery.\u201d",
        attr: "— The most common thing patients say",
      },
      {
        text: "\u201cThe prep was the hardest part. The actual procedure was nothing.\u201d",
        attr: "— A very common experience",
      },
      {
        text: "\u201cI wish I hadn\u2019t put it off for so long. It really wasn\u2019t bad at all.\u201d",
        attr: "— Frequently heard in recovery rooms",
      },
    ],

    concernsHeading: "Addressing Common Concerns",
    concerns: [
      {
        q: "\u201cWill I be awake during it?\u201d",
        a: "Most patients get sleep medicine (sedation) through an IV. You will be in a deep, comfortable sleep-like state. Most people have no memory of the procedure at all. You won\u2019t feel pain. The medicine works within seconds.",
      },
      {
        q: "\u201cWhat if I feel something?\u201d",
        a: "Your care team watches you the whole time and can give more medicine right away. If you show any sign of discomfort, they act immediately. A nurse or anesthesia provider is right beside you the entire time.",
      },
      {
        q: "\u201cI\u2019m embarrassed about the procedure.\u201d",
        a: "This is very common and completely understandable. Your care team does this every day — often 10 or more times a day. To them, it is routine. You will be covered with a gown and blanket, and your privacy is always respected. You will be asleep for the procedure.",
      },
      {
        q: "\u201cWhat if they find something bad?\u201d",
        a: "Finding polyps is actually a good thing. It means your doctor caught them before they could become dangerous. Most polyps are harmless and are removed right away. Finding and removing them is the whole point — it prevents cancer. Even if something worrying is found, catching it early makes treatment much more effective.",
      },
      {
        q: "\u201cI had a bad experience before / I have medical trauma.\u201d",
        a: "If you have had a difficult experience with medical procedures in the past, please tell your care team. They can offer extra support, more sleep medicine, or other help. You can ask a nurse to hold your hand, explain every step, or simply be there for you. Your comfort matters — speak up.",
      },
    ],

    tipsHeading: "Practical Tips for Managing Anxiety",
    tips: [
      {
        heading: "Educate yourself",
        text: "Reading this guide is a great start. Knowing what will happen helps reduce fear.",
      },
      {
        heading: "Deep breathing",
        text: "Try box breathing: breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4. This slows your heart rate and calms your body.",
      },
      {
        heading: "Talk to your doctor",
        text: "Tell your care team you are nervous. They help anxious patients every day. Some doctors can prescribe a mild calming medication to take the morning of your procedure.",
      },
      {
        heading: "Bring a support person",
        text: "You need someone to drive you home anyway. Having a trusted person with you in the waiting area can help you feel calmer.",
      },
      {
        heading: "Focus on why you're doing this",
        text: "A colonoscopy can prevent colon cancer. A 30-minute nap now could save your life. That is worth a bit of nervousness.",
      },
      {
        heading: "Distract yourself during prep",
        text: "Prep day is the hardest part. Line up your favorite shows, audiobooks, or podcasts. Many patients make it a \"couch day\" and get through it easily.",
      },
    ],

    sedationHeading: "Understanding Sedation",
    sedationIntro:
      "Most colonoscopies in Canada use sleep medicine (sedation). Here is what that means for you:",
    sedationFeel: {
      heading: "What you will feel",
      items: [
        "An IV is placed in your arm (a brief pinch)",
        "You feel drowsy within seconds",
        "Most people fall asleep completely",
        "You won\u2019t remember the procedure",
        "You wake up in recovery feeling rested",
      ],
    },
    sedationMeds: {
      heading: "Common medications used",
      items: [
        "Fentanyl — a pain medication given before the procedure",
        "Midazolam — helps you relax and forget the procedure",
        "Propofol — a deeper sleep medicine, used at some centres",
        "Your heart rate, breathing, and blood pressure are watched the whole time",
      ],
    },
    sedationNote:
      "A nurse or anesthesia provider is with you the whole time, watching your breathing, heart rate, and blood pressure.",

    bottomLine: "The bottom line",
    bottomLineText:
      "A colonoscopy is one of the best ways to prevent cancer. Millions are done safely every year. Most patients say they wish they had not worried so much. You've got this.",
  },

  // ── Risks & Safety page (hardcoded content) ───────────────────────────────
  risksAndSafety: {
    pageTitle: "Risks & Safety",
    pageSubtitle: "Understanding colonoscopy safety and rare complications",

    safetyHeading: "Colonoscopy is very safe",
    safetyText:
      "A colonoscopy is one of the safest procedures in medicine. Millions are done safely every year. Serious problems are rare — less than 1 in 1,000 screening colonoscopies. Your doctor will go over the risks with you before the procedure.",

    statsHeading: "Complication Rates in Perspective",
    stats: [
      { value: "99.9%", label: "of screening colonoscopies have no serious complications" },
      { value: "<0.1%", label: "risk of perforation (a hole in the colon wall)" },
      { value: "0.1-0.6%", label: "risk of significant bleeding after polyp removal" },
    ],
    statsNote:
      "To put this in perspective: without screening, about 4 to 5 out of 100 people will get colon cancer in their lifetime. The small risks of a colonoscopy are far outweighed by the cancer prevention benefit.",

    specificRisksHeading: "Understanding Specific Risks",
    risks: [
      {
        badge: "Uncommon",
        badgeColor: "warning",
        heading: "Bleeding",
        text: "Minor bleeding can happen after polyp removal. It usually stops on its own. Heavier bleeding that needs treatment happens in less than 1 in 200 cases. The risk is higher with larger polyps or if you take blood thinners. A small amount of blood in your first bowel movement after the procedure is normal.",
      },
      {
        badge: "Rare",
        badgeColor: "restrict",
        heading: "Perforation",
        text: "A perforation is a small tear or hole in the colon wall. This is the most serious but rarest problem — less than 1 in 1,000 screening colonoscopies. It is slightly more likely when polyps are removed. If it happens, it can usually be treated with antibiotics and rest. Surgery is rarely needed. This is why you should report bad belly pain after the procedure.",
      },
      {
        badge: "Uncommon",
        badgeColor: "warning",
        heading: "Post-Polypectomy Syndrome",
        text: "After a large polyp is removed, you may get belly pain and a low fever. This happens when the colon wall gets irritated but is not torn. It usually gets better with antibiotics and rest. Surgery is not needed.",
      },
      {
        badge: "Low Risk",
        badgeColor: "brand",
        heading: "Sedation-Related Risks",
        text: "Sleep medicine (sedation) can very rarely cause breathing problems, heart rate changes, or allergic reactions. Your vital signs are watched the whole time by a team member. If you have sleep apnea, lung or heart disease, or obesity, let your doctor know — they may need to take extra care.",
      },
      {
        badge: "Very Rare",
        badgeColor: "brand",
        heading: "Infection",
        text: "The chance of getting an infection from a colonoscopy is extremely low. The camera tubes are cleaned and disinfected carefully between each use, following strict national rules. Tell your doctor if you get a fever above 38.5°C (101°F) after the procedure.",
      },
      {
        badge: "Uncommon",
        badgeColor: "warning",
        heading: "Incomplete Examination",
        text: "Sometimes the camera cannot reach the end of the colon. This can happen because of body shape, scar tissue from past surgery, or poor prep. If this happens, your doctor may suggest doing it again or using a different test (like a CT scan). This is not a complication, but it means the screening may need to be finished another way.",
      },
    ],

    prepRisksHeading: "Bowel Preparation Risks",
    prepRisksIntro:
      "The bowel preparation itself carries small risks that are important to understand:",
    prepRisks: [
      {
        heading: "Dehydration",
        text: "The prep causes you to lose a lot of fluid. Drink plenty of clear fluids. Watch for signs of dehydration: dizziness, dry mouth, and dark urine.",
      },
      {
        heading: "Electrolyte imbalance",
        text: "Drink different types of fluids, not just water. Sports drinks, clear broth, and apple juice help keep your body in balance.",
      },
      {
        heading: "Nausea",
        text: "Some people feel sick during prep. Try drinking slowly, chilling the solution, and taking breaks between glasses. If you cannot stop vomiting, call your doctor.",
      },
      {
        heading: "Kidney concerns",
        text: "Some prep solutions are not safe for people with kidney disease. Your doctor will choose the safest prep for you.",
      },
    ],

    emergencyHeading: "When to Seek Medical Attention After Your Procedure",
    emergencyIntro:
      "Contact your doctor or go to the emergency department if you experience any of the following after your colonoscopy:",
    emergencyItems: [
      "Severe or worsening abdominal pain (not just mild bloating)",
      "Heavy rectal bleeding (more than a tablespoon of bright red blood)",
      "Persistent bleeding that doesn't stop",
      "Fever above 38.5°C (101°F)",
      "Severe nausea or vomiting",
      "Inability to pass gas or have a bowel movement for more than 24 hours after procedure",
      "Chest pain, difficulty breathing, or fainting",
      "Abdominal swelling or firmness",
    ],
    emergencyBC:
      "In BC: If you need urgent advice, call 811 (HealthLink BC) to speak with a registered nurse 24/7. For emergencies, call 911 or go to your nearest emergency department.",

    safetyMeasuresHeading: "How We Keep You Safe",
    safetyMeasures: [
      "Trained specialists — your procedure is done by a doctor with years of specialized training",
      "Constant monitoring — your oxygen, heart rate, and blood pressure are watched the whole time",
      "Strict cleaning rules — the equipment is thoroughly cleaned and disinfected after every use",
      "Quality tracking — hospitals track success rates and complication rates to keep improving",
      "Health check before the procedure — your health history and medications are reviewed to make sure everything is safe",
    ],
  },

  // ── BowelPrepScale levels ─────────────────────────────────────────────────
  bowelPrepLevels: [
    {
      score: 3,
      label: "Excellent",
      description:
        "Looks like light apple juice or lemonade. You can see clearly through it.",
      message: "Your prep is excellent! This is what we\u2019re aiming for.",
    },
    {
      score: 2,
      label: "Good",
      description: "Looks like cloudy lemonade. Mostly see-through but a bit hazy.",
      message: "Good prep! Your doctor should be able to see well.",
    },
    {
      score: 1,
      label: "Fair",
      description:
        "Looks like orange juice or iced tea. You cannot see through it easily.",
      message:
        "Your prep needs more time. Drink another glass of prep solution now. Walk around for 10 minutes, then check again in 30 minutes.",
    },
    {
      score: 0,
      label: "Poor",
      description:
        "Looks like coffee or cola. Dark and you cannot see through it at all.",
      message:
        "Keep drinking your prep solution and clear fluids. Walk around between glasses. If nothing changes after 2 more hours, call your doctor\u2019s office.",
    },
  ],

  // ── CountdownTimer timeline ───────────────────────────────────────────────
  countdownTimeline: [
    {
      daysOut: 7,
      label: "7 days before",
      heading: "One week out",
      priority: "Pick up your prep solution from the pharmacy today.",
      tip: "Chill your prep solution in the fridge. It\u2019s much easier to drink cold.",
      tasks: [
        "Pick up your prep solution from the pharmacy",
        "Stop taking iron supplements",
        "Arrange a ride home from your procedure",
        "Stock up on clear liquids (broth, Jello, apple juice, sports drinks)",
      ],
    },
    {
      daysOut: 3,
      label: "3 days before",
      heading: "Three days out",
      priority: "Switch to low-residue foods starting today.",
      tip: "Avoid red or purple liquids \u2014 they can look like blood during the procedure.",
      tasks: [
        "Switch to low-residue foods (white bread, eggs, chicken, fish)",
        "Avoid high-fibre foods: raw vegetables, corn, nuts, seeds, popcorn",
        "Avoid red or purple liquids and Jello",
      ],
    },
    {
      daysOut: 1,
      label: "Day before",
      heading: "Tomorrow is the day",
      priority: "Clear liquids only \u2014 start your prep solution tonight.",
      tip: "Use a straw and mix prep with lemon-lime sports drink to help with the taste.",
      tasks: [
        "Clear liquids only for the entire day",
        "Begin drinking your prep solution as directed (usually evening)",
        "Stay near a bathroom \u2014 the prep works quickly",
        "Keep drinking clear fluids to stay hydrated",
      ],
    },
    {
      daysOut: 0,
      label: "Today",
      heading: "Procedure day",
      priority: "Finish your morning prep dose on time.",
      tip: "Wear loose, comfortable clothes. Leave jewelry and valuables at home.",
      tasks: [
        "Complete the second half of your split-prep (usually early morning)",
        "Nothing to eat or drink after finishing your prep",
        "Take essential medications with a small sip of water",
        "Wear comfortable, loose-fitting clothing",
        "Bring your health card and medication list",
        "Your ride should be ready to take you home after",
      ],
    },
  ],

  // ── DoctorQuestions categories ────────────────────────────────────────────
  doctorQuestionCategories: [
    {
      title: "Before the Procedure",
      questions: [
        "Which bowel prep solution should I use?",
        "Should I stop any of my regular medications?",
        "I take blood thinners \u2014 what should I do?",
        "I have diabetes \u2014 how should I manage my insulin/medications?",
        "Can I take my morning medications on the day of the procedure?",
        "What type of sedation will be used?",
      ],
    },
    {
      title: "During the Procedure",
      questions: [
        "How long will the procedure take?",
        "Will you be able to remove polyps if you find them?",
        "Will I be fully asleep or just sedated?",
      ],
    },
    {
      title: "After the Procedure",
      questions: [
        "When will I get my results?",
        "How will I find out about biopsy results?",
        "When can I eat and drink normally again?",
        "Are there any warning signs I should watch for?",
        "When do I need my next colonoscopy?",
        "Should any family members be screened?",
      ],
    },
  ],
} as const;
