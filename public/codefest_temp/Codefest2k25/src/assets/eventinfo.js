import {
  Freefire,
  Football,
  Basketball,
  Cricket,
  Armrestling,
  Iconhunt,
  Sound,
  Connection,
  Ideaflow,
  WebCraft,
  Innov,
  WordHunt,
  Codecraze,
} from ".";

const eventinfo = [
  {
    title: "BOX CRICKET",
    subtitle: "Box Cricket: Small Ground, Big Thrills! 🏏🔥",
    type: "Non-Technical",
    background: Cricket,
    venue: "Ground",
    teamSize: "5 Members Per Team",
    description:
      "Experience the excitement of box cricket in a backyard-style setting where teams of five players compete in a fast-paced, thrilling format. This version of cricket is designed to be both fun and competitive, allowing players to showcase their skills in a confined playing area. With modified rules and a limited number of overs, box cricket adds an exciting twist to the traditional game, making it an engaging experience for all participants.",
    firstcontact: "  📞 Venkataraman K: +91 70108 74045",
    secondcontact: "  📞 Sanjeev V: +91 96776 81739",
    poster:
      "https://www.instagram.com/p/DHnIP0ITSEw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: ["Experience fast-paced Box Cricket with 5-player, limited overs."],
    rules: [
      "Team Composition: Each team has 5 players; no extra substitutes allowed.",
      "Match Format: Fixed overs per team; batting and bowling alternates.",
      "Scoring: Runs doesn't count through boundaries; special wall rules apply.",
      "Fielding Restrictions: Limited players near crease; defined boundary regulations enforced.",
      "Fair Play: Umpire decisions are final; sportsmanship is strictly maintained.",
    ],
  },
  {
    title: "BASKETBALL",
    subtitle: "Basketball: Fast Breaks, Big Plays, Pure Passion! 🏀🔥",
    type: "Non-Technical",
    background: Basketball,
    venue: "Court",
    teamSize: "5 Members Per Team",
    description:
      "Experience the intensity of full-court basketball, where teams compete in a fast-paced, high-energy game that tests endurance, strategy, and teamwork. With dynamic plays, quick transitions, and strategic maneuvers, basketball offers an exciting and competitive experience for all players.",
    firstcontact: " 📞Karthikeyan A: +91 70105 72468",
    secondcontact: " 📞Kathiravan D: +91 91235 04247",
    poster:
      "https://www.instagram.com/p/DHnHmwITadu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: [
      "Compete in full-court basketball with fast breaks and dynamic plays!                                            ",
    ],
    rules: [
      "Team Composition: Five players per team; substitutions allowed as per rules.",
      "Match Format: Two quarters of play; structured for competitive engagement.",
      "Scoring: Points awarded for field goals, three-pointers, and free throws.",
      "Gameplay Rules: Includes shot clock, traveling, and double dribbling restrictions.",
      "Fair Play: Sportsmanship is mandatory; referee decisions are final.",
    ],
  },
  {
    title: "POWER PLAY",
    subtitle: "Push-Up Endurance Challenge! 💪🔥",
    type: "Non-Technical",
    background: Armrestling,
    venue: "Classroom",
    teamSize: "Individual",
    description:
      "A 3-minute high-intensity push-up marathon! Test your strength and stamina by completing maximum push-ups with perfect form. Only strict, judge-verified repetitions count toward your final score.",
    firstcontact: "📞 Arasu: +91 63749 74126",
    secondcontact: "",
    poster:
      "https://www.instagram.com/p/DHnSPYzTrKZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: ["3-minute push-up blitz - how many can YOU do? ⏱"],
    rules: [
      "Time Limit: Strict 3-minute duration",
      "Form Requirements:",
      "• Chest must touch ground each rep",
      "• Full arm extension at top",
      "Judging:",
      "• Only judge-counted reps count",
      "• No partial/cheat reps allowed",
      "Winning: Highest valid count wins",
      "Tiebreaker: 1-minute sudden death round",
    ],
  },
  {
    title: "FREE FIRE",
    subtitle: "Free Fire: Survive, Strategize, Dominate! 🔥🎯",
    type: "Non-Technical",
    background: Freefire,
    venue: "Online / Classroom",
    teamSize: "Squad Mode (4 Players Per Team)",
    description:
      "Get ready for an intense and competitive Battle Royale Ranked (BR Ranked) Squad Mode tournament in Free Fire. Played in E-Sports Mode, this event ensures a fair and level playing field, challenging players to showcase their strategy, teamwork, and survival skills. Compete against the best and prove your dominance in this high-stakes battle!",
    firstcontact: " 📞Ajith A: +91 86673 05838",
    secondcontact: " 📞Loganathan R: +91 97905 36598",
    poster:
      "https://www.instagram.com/p/DHnIYnszXdQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: [
      "Battle Royale Squad Mode, E-Sports setup, fair play, and intense competition!",
    ],
    rules: [
      "Match Format: BR Ranked (Squad Mode) using E-Sports Mode for fairness.",
      "Prohibited Actions: Gun skins, banned items, cheats, or hacking disallowed.",
      "Gameplay Rules: No teaming, intentional disconnection, or bug exploitation.",
      "Match Monitoring: Custom rooms created, referees may monitor matches.",
      "Fair Play: Referee and organizer decisions are final; sportsmanship required.",
    ],
  },
  {
    title: "FOOTBALL",
    subtitle: "Fast-Paced 5-a-Side Football! ⚽🔥",
    type: "Non-Technical",
    background: Football,
    venue: "Ground",
    teamSize: "5 Players Per Team",
    description:
      "A high-energy 5-a-side football tournament with quick rounds and intense action. Showcase your skills, teamwork, and strategy in this fast-paced format. Strict rules ensure fair play and maximum fun!",
    firstcontact: "📞 Suman Babu: +91 97863 76078",
    secondcontact: "📞 Naveen S: +91 93428 57757",
    poster:
      "https://www.instagram.com/p/DHnH_zdTEGG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: [
      "5-a-side football: 5-min thrillers, 2-min breaks, pure energy!⚡",
    ],
    rules: [
      "Footwear: Sports shoes mandatory (no cleats).",
      "Timing: 5-min matches, 2-min breaks between rounds.",
      "Team Size: Only 5 players allowed on-field at a time.",
      "Conduct: Zero tolerance for fights; referee’s call is final.",
    ],
  },
  {
    title: "CONNECTION",
    subtitle:
      "Unlock the clues, connect the dots, and race against time! Think fast, answer faster, and claim victory! 🏆🧠",
    type: "Non-Technical",
    background: Connection,
    venue: "Classroom",
    teamSize: "4 Members Per Team",
    description:
      "Test your logic and quick thinking in the thrilling 'Connection' event! Teams will compete across three exciting rounds, answering questions under time pressure. The team with the highest score at the end will be crowned the ultimate champions!",
    firstcontact: " 📞Vaitheewari S: 91503 89718",
    secondcontact: " 📞Sunitha S: 81486 79302",
    poster:
      "https://www.instagram.com/p/DHnVfnMz-BA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: ["Three intense rounds of quick thinking and strategic answering!"],
    rules: [
      "Team Size: Maximum of four members per team allowed.",
      "Round 1: Five questions per team; 20 seconds per answer.",
      "Round 2: Five questions per team; 20 seconds per answer.",
      "Point Stealing: Wrong answers pass to other teams for extra points.",
      "Round 3: Fastest correct answer in 15 seconds wins points.",
      "Winner: Team with highest score after all rounds wins.",
    ],
  },
  {
    title: "IDEAFLOW",
    subtitle: "Showcase Your Research & Ideas! 📝🎤",
    type: "Technical",
    background: Ideaflow,
    venue: "Edusat Hall",
    teamSize: "Max 4 Members",
    description:
      "Present your innovative research in a 10-minute showcase (5-6 slides) followed by Q&A. Choose any technical topic, but focus on depth over breadth. Perfect for aspiring researchers and conference presenters!",
    firstcontact: "📞 Tharani P: +91 73058 80535",
    secondcontact: "📞 Nivetha M: +91 87542 73735",
    poster:
      "https://www.instagram.com/p/DHoPJ7vzNFx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: ["10-min academic showdown with Q&A! 🧠"],
    rules: [
      "Bring presentations on USB/laptop",
      "No pre-recorded voiceovers",
      "Cite all references properly",
      "Q&A responses count toward scoring",
      "Time penalties for overruns",
    ],
  },
  {
    title: "INNOVQUIZ",
    subtitle: "Tech Trivia Showdown! 🧠⚡",
    type: "Technical",
    background: Innov,
    venue: "Classroom",
    teamSize: "Individual",
    description:
      "Three escalating rounds testing Python, Java, C, DSA and DBMS knowledge. Starts with 20 questions in 10 minutes, then a speed round, culminating in a 25-question final. Only the sharpest advance!",
    firstcontact: "📞 Harini R: +91 86672 40584",
    secondcontact: "📞 Aafrin Firdous H: +91 98438 04242",
    poster:
      "https://www.instagram.com/p/DHoObCoTFWH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: ["3-tier tech quiz with elimination! 💻"],
    rules: [
      "No calculators/internet",
      "Tiebreaker: Average all rounds",
      "Must reach minimum score to advance",
      "No negative marking",
      "Verbal protests void answers",
      "Round Structure is in our poster",
    ],
  },
  {
    title: "WORDHUNT",
    subtitle: "Decode Tech Language! 🔍💡",
    type: "Technical",
    background: WordHunt,
    venue: "Classroom / Lab",
    teamSize: "Individual",
    description:
      "Three unique challenges: 1) Find tech terms in word grids 2) Decode binary messages 3) Invent creative backronyms for common tech acronyms. Combine speed, vocabulary and creativity!",
    firstcontact: "📞 Divya Bharathi: +91 90032 16461",
    secondcontact: "📞 Bhuvana M: +91 63841 10509",
    poster:
      "https://www.instagram.com/p/DHoPRp3TdaO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: ["Tech word puzzles × binary decoding × acronym art! 🧩"],
    rules: [
      "Tech Word Search (Grid Puzzle): Participants must find and identify the maximum number of tech-related words hidden in a classic word search grid.",
      "Binary Word Hunt: Participants decode given binary codes and convert them into meaningful words.",
      "Acronym Backronym Challenge: Participants take common acronyms and creatively expand them into meaningful backronyms.",
    ],
  },
  {
    title: "CODECRAZE",
    subtitle: "Debugging Marathon! 💻🔥",
    type: "Technical",
    background: Codecraze,
    venue: "Lab",
    teamSize: "Individual",
    description:
      "Three intense rounds: 1) Fix 3 buggy codes (5 errors each) 2) Write code from output samples 3) Solve an OOP challenge. Judged on correctness, efficiency and elegance under 20-min/round pressure.",
    firstcontact: "📞 Kalaiselvan S:  +91 90259 70495",
    secondcontact: "📞 Mahalakshmi Y: +91 82488 74400",
    poster:
      "https://www.instagram.com/p/DHoO_E5Thpo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: ["Debug → Reverse → Optimize under fire! ⏱"],
    rules: [
      "Participants can use any programming language that they are familiar.",
      "Each round has 20 mins duration.",
      "Participants will be filtered to next round based on their marks",
      "Note: Marks will be evaluated based on the correctness, efficiency and accuracy",
    ],
  },

  {
    title: "SOUND SYNTAX",
    subtitle: "Music Identification Rush! 🎵🔥",
    type: "Non-Technical",
    background: Sound,
    venue: "Auditorium",
    teamSize: "4 Members Per Team",
    description:
      "Three pulse-pounding rounds: 1) Identify 5 BGMs (5-sec clips + 15-sec answers) 2) Speed round (10-sec answers) 3) Lyric sprint (5-sec clips + 5-sec answers). Perfect for music fanatics!",
    firstcontact: "📞 Aravind J: +91 90432 71900",
    secondcontact: "📞 Jayakanth G: +91 93606 54531",
    poster:
      "https://www.instagram.com/p/DHnIyS6zbkH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: ["BGM → Speed Round → Lyric Sprint! 🎶"],
    rules: [
      "Mobile will be collected by the coordinators before entering the round ",
      "Do not answer before the time when you are supposed to answer",
      "Answer after the buzzer or whistle ",
      "Do not share or discuss your ideas or answer with other teams",
      "Volume complaints void question",
      "Coordinators call is final",
    ],
  },
  {
    title: "WEBCRAFTERS",
    subtitle: "Frontend Battle! 🌐✨",
    type: "Technical",
    background: WebCraft,
    venue: "Lab",
    teamSize: "1 Members",
    description:
      "Unleash Your creativity & coding skills in WebCrafters, The Ultimate frontend development competition! This event consist of two challenging rounds one is Single Page Challenge & another Innovative web app development.",
    firstcontact: "📞 Tharun Varshan AS: +91 99526 82252",
    secondcontact: "📞 Karthikeyan S: +91 84893 11138",
    poster:
      "https://www.instagram.com/p/DHpbm8Wz1La/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    points: ["From static page to full app in 2 rounds! 🚀"],
    rules: [
      "UI/UX tools can be used to design",
      "Internet materials / templates are not allowed",
      "There must be a landing page, other page designs is participants wish",
      "Incase templates are used, participant will be eliminated",
    ],
  },
  {
    title: "ICONHUNT",
    subtitle: "Decode Tech Language! 🔍💡",
    type: "Technical",
    background: Iconhunt,
    venue: "Classroom",
    teamSize: "Individual",
    description:
      "Welcome to the Icon Hunt Challenge — a fun and engaging competition designed to test your visual recognition and quick thinking! Get ready to identify popular icons in a race against time. The event consists of two exciting rounds that will challenge your memory, observation skills, and knowledge of digital icons.",
    firstcontact: "📞 Madhumitha T: +91 63744 67842",
    secondcontact: "📞 Kaviya K: +91 93612 56598",
    poster:
      "https://www.instagram.com/p/DHnKE5tz8GT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    points: [
      "Identify icons in 2 rounds, 20-sec per question. Solo. Most correct answers win!",
    ],
    rules: [
      "No Discussion: Strictly no discussion with other participants.",
      "Fair Play: No external help allowed.",
      "Judging: Judges' decisions are final.",
    ],
  },
  
];

export default eventinfo;
