const projectList = [
  {
    "name": "Apple",
    "imageSrc": "https://avatars.githubusercontent.com/u/10639145?s=200&v=4",
    "projectLink": "https://github.com/apple/swift",
    "description": "The Swift Programming Language",
    "tags": ["C++", "Python", "C", "iOS","Swift"]
  },
  {
    "name": "Appsmith",
    "imageSrc": "https://avatars.githubusercontent.com/u/67620218?s=200&v=4",
    "projectLink": "https://github.com/appsmithorg/appsmith",
    "description": "Drag & Drop internal tool builder",
    "tags": ["UI", "Database", "Editor"]
  },
  {
    "name": "HashiCorp",
    "imageSrc": "https://avatars.githubusercontent.com/u/11272569?s=200&v=4",
    "projectLink": "https://github.com/hashicorp/consul",
    "description": "Building infrastructure automation software",
    "tags": ["DevOps", "Cloud", "Infrastructure"]
  },
  {
    "name": "Mozilla",
    "imageSrc": "https://avatars.githubusercontent.com/u/131524?s=200&v=4",
    "projectLink": "https://github.com/mozilla/pdf.js",
    "description": "Open-source software organization known for Firefox and Thunderbird",
    "tags": ["Web", "Browser", "Email"]
  },
  {
    "name": "TensorFlow",
    "imageSrc": "https://avatars.githubusercontent.com/u/15658638?s=200&v=4",
    "projectLink": "https://github.com/tensorflow/tensorflow",
    "description": "An open-source machine learning framework by Google",
    "tags": ["Machine Learning", "Deep Learning", "AI"]
  },
  {
    "name": "Elastic",
    "imageSrc": "https://avatars.githubusercontent.com/u/6764390?s=200&v=4",
    "projectLink": "https://github.com/elastic/elasticsearch",
    "description": "Creators of the Elasticsearch, Logstash, Kibana, and Beats (ELK) stack",
    "tags": ["Search", "Analytics", "Monitoring"]
  },
  {
    "name": "Node.js",
    "imageSrc": "https://avatars.githubusercontent.com/u/9950313?s=200&v=4",
    "projectLink": "https://github.com/nodejs/node",
    "description": "A JavaScript runtime built on Chrome's V8 JavaScript engine",
    "tags": ["JavaScript", "Server", "Runtime"]
  },
  {
    "name": "Kubernetes",
    "imageSrc": "https://avatars.githubusercontent.com/u/13629408?s=200&v=4",
    "projectLink": "https://github.com/kubernetes/kubernetes",
    "description": "Open-source container orchestration platform",
    "tags": ["Container", "Orchestration", "Cloud"]
  },
  {
    "name": "Docker",
    "imageSrc": "https://avatars.githubusercontent.com/u/5429470?s=200&v=4",
    "projectLink": "https://github.com/docker/compose",
    "description": "An open platform for developing, shipping, and running applications",
    "tags": ["Container", "DevOps", "Virtualization"]
  },
  {
    "name": "Jupyter",
    "imageSrc": "https://avatars.githubusercontent.com/u/7388996?s=200&v=4",
    "projectLink": "https://github.com/jupyter/notebook",
    "description": "Interactive computing and data science tools",
    "tags": ["Data Science", "Notebooks", "Python"]
  },
  {
    "name": "Rust",
    "imageSrc": "https://avatars.githubusercontent.com/u/5430905?s=200&v=4",
    "projectLink": "https://github.com/rust-lang/rust",
    "description": "A systems programming language focused on safety and performance",
    "tags": ["Programming Language", "Systems", "Safety"]
  },
  {
    "name": "WordPress",
    "imageSrc": "https://avatars.githubusercontent.com/u/276006?s=200&v=4",
    "projectLink": "https://github.com/WordPress/wordpress-develop",
    "description": "Open-source content management system (CMS)",
    "tags": ["CMS", "Blogging", "Web"]
  },
  {
    "name": "Apache Foundation",
    "imageSrc": "https://avatars.githubusercontent.com/u/47359?s=200&v=4",
    "projectLink": "https://github.com/apache/echarts",
    "description": "An umbrella organization for open source software projects",
    "tags": ["Foundation", "Open Source", "Projects"]
  },
  {
    "name": "Golang",
    "imageSrc": "https://avatars.githubusercontent.com/u/4314092?s=200&v=4",
    "projectLink": "https://github.com/golang/go",
    "description": "The Go programming language developed by Google",
    "tags": ["Programming Language", "Systems", "Efficiency"]
  },
  {
    "name": "React",
    "imageSrc": "https://avatars.githubusercontent.com/u/6412038?s=200&v=4",
    "projectLink": "https://github.com/facebook/react",
    "description": "A JavaScript library for building user interfaces",
    "tags": ["JavaScript", "UI", "Library"]
  },
  {
    "name": "VSCode",
    "imageSrc": "https://avatars.githubusercontent.com/u/6154722?s=200&v=4",
    "projectLink": "https://github.com/microsoft/vscode",
    "description": "Visual Studio Code, a code editor developed by Microsoft",
    "tags": ["Code Editor", "IDE", "Development"]
  },
  {
    "name": "Ruby on Rails",
    "imageSrc": "https://avatars.githubusercontent.com/u/4223?s=200&v=4",
    "projectLink": "https://github.com/rails/rails",
    "description": "A web application framework for the Ruby programming language",
    "tags": ["Ruby", "Web Development", "Framework"]
  },
  {
    "name": "Apache Kafka",
    "imageSrc": "https://avatars.githubusercontent.com/u/47359?s=200&v=4",
    "projectLink": "https://github.com/apache/kafka",
    "description": "A distributed event streaming platform",
    "tags": ["Data Streaming", "Big Data", "Messaging"]
  },
  {
    "name": "Angular",
    "imageSrc": "https://avatars.githubusercontent.com/u/139426?s=200&v=4",
    "projectLink": "https://github.com/angular/angular",
    "description": "A platform for building web applications with TypeScript",
    "tags": ["JavaScript", "Web Development", "Framework"]
  },
  {
    "name": "PyTorch",
    "imageSrc": "https://avatars.githubusercontent.com/u/21003710?s=200&v=4",
    "projectLink": "https://github.com/pytorch/pytorch",
    "description": "An open-source machine learning library for Python",
    "tags": ["Machine Learning", "Deep Learning", "Python"]
  },
  {
    "name": "Nginx",
    "imageSrc": "https://avatars.githubusercontent.com/u/160929?s=200&v=4",
    "projectLink": "https://github.com/nginx/nginx",
    "description": "A high-performance web server and reverse proxy server",
    "tags": ["Web Server", "Proxy Server", "Performance"]
  },
  {
    "name": "OpenAI",
    "imageSrc": "https://avatars.githubusercontent.com/u/14957082?s=200&v=4",
    "projectLink": "https://github.com/openai/openai-cookbook",
    "description": "Advancing AI research and developing AI technologies",
    "tags": ["Artificial Intelligence", "Research", "AI Technologies"]
  },
  {
    "name": "TensorRT",
    "imageSrc": "https://avatars.githubusercontent.com/u/1728152?s=200&v=4",
    "projectLink": "https://github.com/NVIDIA/TensorRT",
    "description": "High-performance deep learning inference library by NVIDIA",
    "tags": ["Deep Learning", "Inference", "NVIDIA"]
  },
  {
    "name": "Vue.js",
    "imageSrc": "https://avatars.githubusercontent.com/u/6128107?s=200&v=4",
    "projectLink": "https://github.com/vuejs/vue",
    "description": "A progressive JavaScript framework for building user interfaces",
    "tags": ["JavaScript", "UI", "Framework"]
  },
  {
    "name": "Apache Spark",
    "imageSrc": "https://avatars.githubusercontent.com/u/47359?s=200&v=4",
    "projectLink": "https://github.com/apache/spark",
    "description": "A fast and general-purpose cluster computing system",
    "tags": ["Big Data", "Cluster Computing", "Data Processing"]
  },
  {
    "name": "Terraform",
    "imageSrc": "https://avatars.githubusercontent.com/u/761456?s=200&v=4",
    "projectLink": "https://github.com/hashicorp/terraform",
    "description": "Infrastructure as Code (IaC) tool by HashiCorp",
    "tags": ["Infrastructure", "Automation", "IaC"]
  },
  {
    "name": "Rust Analyzer",
    "imageSrc": "https://avatars.githubusercontent.com/u/5430905?s=200&v=4",
    "projectLink": "https://github.com/rust-analyzer/rust-analyzer",
    "description": "A fast and precise Rust language server",
    "tags": ["Rust", "Language Server", "IDE"]
  },
  {
    "name": "Kubeflow",
    "imageSrc": "https://avatars.githubusercontent.com/u/33164907?s=200&v=4",
    "projectLink": "https://github.com/kubeflow/kubeflow",
    "description": "An open, composable ML stack built around Kubernetes",
    "tags": ["Machine Learning", "Kubernetes", "ML Stack"]
  },
  {
    "name": "FastAPI",
    "imageSrc": "",
    "projectLink": "https://github.com/tiangolo/fastapi",
    "description": "A modern, fast (high-performance) web framework for building APIs with Python 3.7+",
    "tags": ["Python", "Web Framework", "API"]
  },
  {
    "name": "Helm",
    "imageSrc": "https://avatars.githubusercontent.com/u/15859888?s=200&v=4",
    "projectLink": "https://github.com/helm/helm",
    "description": "The Kubernetes Package Manager",
    "tags": ["Kubernetes", "Package Manager", "DevOps"]
  },
  {
    "name": "Deno",
    "imageSrc": "https://avatars.githubusercontent.com/u/42048915?s=200&v=4",
    "projectLink": "https://github.com/denoland/deno",
    "description": "A secure runtime for JavaScript and TypeScript",
    "tags": ["JavaScript", "TypeScript", "Runtime"]
  },
  {
    "name": "Svelte",
    "imageSrc": "https://avatars.githubusercontent.com/u/23617963?s=200&v=4",
    "projectLink": "https://github.com/sveltejs/svelte",
    "description": "A JavaScript framework for building user interfaces",
    "tags": ["JavaScript", "UI", "Framework"]
  },
  {
    "name": "Grafana",
    "imageSrc": "https://avatars.githubusercontent.com/u/7195757?s=200&v=4",
    "projectLink": "https://github.com/grafana/grafana",
    "description": "The open observability platform",
    "tags": ["Monitoring", "Observability", "Dashboard"]
  },
  {
    "name": "KubeEdge",
    "imageSrc": "https://avatars.githubusercontent.com/u/41812520?s=200&v=4",
    "projectLink": "https://github.com/kubeedge/kubeedge",
    "description": "An open-source edge computing framework",
    "tags": ["Edge Computing", "IoT", "Kubernetes"]
  },
  {
    "name": "Tailwind CSS",
    "imageSrc": "https://avatars.githubusercontent.com/u/67109815?s=200&v=4",
    "projectLink": "https://github.com/tailwindlabs/tailwindcss",
    "description": "A utility-first CSS framework for rapidly building custom designs",
    "tags": ["CSS", "Web Development", "Framework"]
  },
  {
    "name": "Apache Superset",
    "imageSrc": "https://avatars.githubusercontent.com/u/47359?s=200&v=4",
    "projectLink": "https://github.com/apache/superset",
    "description": "A modern data exploration and visualization platform",
    "tags": ["Data Visualization", "Analytics", "Data Exploration"]
  },
  {
    "name": "RabbitMQ",
    "imageSrc": "https://avatars.githubusercontent.com/u/96669?s=200&v=4",
    "projectLink": "https://github.com/rabbitmq/rabbitmq-server",
    "description": "An open-source message broker software",
    "tags": ["Messaging", "Message Broker", "AMQP"]
  },
  {
    "name": "PyTorch Lightning",
    "imageSrc": "https://avatars.githubusercontent.com/u/58386951?s=200&v=4",
    "projectLink": "https://github.com/PyTorchLightning/pytorch-lightning",
    "description": "The lightweight PyTorch wrapper for high-performance AI research",
    "tags": ["PyTorch", "Deep Learning", "AI Research"]
  },
  {
    "name": "Apache Flink",
    "imageSrc": "https://avatars.githubusercontent.com/u/47359?s=200&v=4",
    "projectLink": "https://github.com/apache/flink",
    "description": "An open-source stream processing and batch processing framework",
    "tags": ["Stream Processing", "Batch Processing", "Big Data"]
  },
  {
    "name": "Hugging Face Transformers",
    "imageSrc": "https://avatars.githubusercontent.com/u/25720743?s=200&v=4",
    "projectLink": "https://github.com/huggingface/transformers",
    "description": "State-of-the-art natural language processing for PyTorch and TensorFlow",
    "tags": ["NLP", "Machine Learning", "AI"]
  },
  {
    "name": "Cal.com",
    "imageSrc": "https://avatars.githubusercontent.com/u/79145102?s=200&v=4",
    "projectLink": "https://github.com/calcom/cal.com",
    "description": "Scheduling infrastructure for absolutely everyone.",
    "tags": ["open-source", "typescript", "nextjs", "postgresql", "prisma", "tailwindcss", "trpc", "next-auth", "zod", "turborepo"]
  },
  {
    "name": "chakra-ui",
    "imageSrc": "https://avatars.githubusercontent.com/chakra-ui?s=200&v=4",
    "projectLink": "https://github.com/chakra-ui/chakra-ui",
    "description": "A simple, modular and accessible UI component library for React Applications.",
    "tags": ["open-source", "typescript", "javascript", "nodejs", "UI"]
  },
  {
    "name": "Next.js",
    "imageSrc": "https://avatars.githubusercontent.com/nextjs?s=200&v=4",
    "projectLink": "https://github.com/vercel/next.js",
    "description": "The React Framework made by Vercel.",
    "tags": ["open-source", "typescript", "javascript", "nodejs", "Framework", "tailwindcss"]
  },
  {
    "name": "Monkeytype",
    "imageSrc": "https://avatars.githubusercontent.com/u/104658077?s=280&v=4",
    "projectLink": "https://github.com/monkeytypegame/monkeytype",
    "description": "The most customizable typing website with a minimalistic design and a ton of features.",
    "tags": ["open-source", "typescript", "HTML", "SCSS", "CSS", "javascript"]
  }
]

export default projectList;