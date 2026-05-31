export const PROJECTS = [
    {
      id: "01",
      name: "Nepal Economic Dashboard",
      description: "Full-stack economic data platform tracking Nepal remittance, GDP, and trade indicators with ML forecasting.",
      stack: ["Python", "FastAPI", "React", "PostgreSQL", "scikit-learn"],
      live: "https://nepal-economic-dashboard.vercel.app",
      github: "https://github.com/saurav856/nepal-remittance-tracker",
      image: "/images/projects/nepal-dashboard.png", // placeholder
    },
    {
      id: "02",
      name: "MLOps Credit Default Pipeline",
      description: "Automated ML pipeline for credit card default prediction with Airflow orchestration and Streamlit dashboard.",
      stack: ["Python", "Airflow", "Docker", "PostgreSQL", "Streamlit"],
      live: null,
      github: null,
      image: "/images/projects/mlops.png",
    },
    {
      id: "03",
      name: "AI News Scraper",
      description: "Automated scraper aggregating AI research and news from multiple sources with RSS parsing.",
      stack: ["Python", "BeautifulSoup", "RSS", "GitHub Actions"],
      live: null,
      github: "https://github.com/saurav856/AI-News-Scraper",
      image: "/images/projects/scraper.png",
    },
    {
      id: "04",
      name: "TheAlgorithms Contributions",
      description: "4 merged pull requests to one of GitHub's largest open source Python repositories.",
      stack: ["Python", "Open Source"],
      live: "https://github.com/TheAlgorithms/Python",
      github: null,
      image: "/images/projects/algorithms.png",
    },
  ]
  
  export const SOCIAL = {
    github:   "https://github.com/saurav856",
    linkedin: "https://www.linkedin.com/in/iamsauravgc/",
    email:    "sauravgc33@gmail.com",
    spotify:  "https://open.spotify.com/playlist/3hgI8DnsUQrtG75AGsUlUX",
  }
  
  export const TERMINAL_COMMANDS: Record<string, string> = {
    whoami:        "Saurav G.C. CS student. Builder. Kathmandu, Nepal.",
    "ls interests/": "music  photography  AI  creative-people",
    "cat stack.txt": "Python  FastAPI  React  PostgreSQL  Airflow  Docker",
    "cat music.txt": "Frank Ocean. Kanye West. Blonde is the album.",
    pwd:           "/home/saurav/kathmandu",
    help:          "whoami · ls interests/ · cat stack.txt · cat music.txt · pwd · date · echo · clear",
  }