window.addEventListener("scroll", () => {
  document
    .querySelector(".luck")

    .classList.toggle("sticky", window.scrollY > 100);
});
// Project Modal Functions
// Project Data
const projectsData = {
  1: {
   title: "AWS S3 Static Website Hosting with CloudFront",
details: {
  overview:
    "Built and deployed a static portfolio website on AWS using Amazon S3 and CloudFront. The project focuses on secure access, HTTPS delivery, and cost-efficient hosting using AWS Free Tier.",

  architecture:
    "The architecture uses Amazon S3 for static website hosting, CloudFront as a CDN for global content delivery with HTTP, and IAM for secure user access and permission management.",

  technologies: [
    "AWS ☁️",
    "Amazon S3 🪣",
    "CloudFront 🌍",
    "IAM 🔐",
    "HTML 🧱"
  ],

  features: [
    "Static website hosting using Amazon S3",
    "Global CDN delivery with CloudFront and HTTP",
    "Secure IAM user login instead of root account",
    "Public access managed using S3 bucket policies",
    "Fast content delivery and low-cost deployment",
    "Real-world cloud deployment workflow"
  ],
},

    screenshots: [
      {
        url: "images/s1.png",
        title: "S3 Bucket",
      },
      {
        url: "images/s2.png",
        title: "Uploaded Files",
      },
      {
        url: "images/s3.png",
        title: "Static hosting enbled",
      },
      {
        url: "images/s4.png",
        title: "Bucket Policy JSON",
      },
       {
        url: "images/s5.png",
        title: "CloudFront setting",
      },
       {
        url: "images/s6.png",
        title: "Live",
      },
    ],
  },
  2: {
    title: "Resume Upload & Email Alert 🌐",
details: {
  overview:
    "A fully serverless system where uploading a resume (PDF) to Amazon S3 🗄️ automatically triggers AWS Lambda ⚡ to send email notifications via Amazon SNS 📨. Secure IAM roles 🛡️ manage permissions. Free Tier–safe and fully automated.",
  architecture:
    "Resume uploaded → Amazon S3 🗄️ triggers AWS Lambda ⚡ → Lambda sends email via Amazon SNS 📨 → Logs monitored in CloudWatch 📊. IAM roles 🛡️ ensure secure access.",
  technologies: [
    "Amazon S3 🗄️",
    "AWS Lambda ⚡",
    "Amazon SNS 📨",
    "IAM 🛡️",
    "Python 🐍"
  ],
  features: [
    "Fully serverless architecture 🏗️",
    "Automatic email notifications on resume upload 📨",
    "Event-driven workflow: S3 → Lambda → SNS 🔄",
    "Secure IAM role-based access 🛡️",
    "Free Tier–safe deployment 💰",
    "Beginner-friendly & real AWS skill demonstration 🎓"
  ],
},

    screenshots: [
      {
        url: "images/l1.png",
        title: "Create S3 Bucket",
      },
      {
        url: "images/l2.png",
        title: "Create IAM Role for Lambda",
      },
        {
        url: "images/l3.png",
        title: "Create SNS Topic",
      },
      {
        url: "images/l4.png",
        title: "Create SNS subcription",
      },
     
      {
        url: "images/l5.png",
        title: "Create Lambda Function",
      },
      {
        url: "images/l6.png",
        title: "Python Code",
      },
      {
        url: "images/l7.png",
        title: "Upload Resume",
      },
       {
        url: "images/l8.png",
        title: "Email AWS Notification ",
      },
    ],
  },
  3: {
    title: "AWS Infrastructure Automation using Terraform",
    details: {
      overview:
        "Automated provisioning of AWS cloud infrastructure using Terraform. Created and managed EC2 instance and S3 bucket using Infrastructure as Code on AWS Free Tier.",
      architecture:
        "Terraform is used to define AWS resources such as EC2, Security Group, and S3 bucket. AWS IAM is used for authentication, and resources are managed using terraform init, plan, apply, and destroy commands.",
      technologies: [
         "AWS",
        "Terraform",
        "EC2",
        "S3",
        "IAM",
        "AWS CLI",
      ],
      features: [
      "Automated EC2 instance creation",
        "S3 bucket provisioning using Terraform",
        "Infrastructure as Code (IaC)",
        "Free-tier compliant AWS resources",
        "Easy resource cleanup using terraform destroy",
        "Reusable and scalable Terraform configuration",
      ],
    },
    screenshots: [
       {
        url: "images/tt1.png",
        title: "Apply scripts",
      },
      {
        url: "images/tt2.png",
        title: "Terraform initialization",
      },
    
      {
        url: "images/tt4.png",
        title: "EC2 created",
      },
      {
        url: "images/tt5.png",
        title: "S3 Created",
      },
      {
        url: "images/tt6.png",
        title: "Final verification",
      },
       {
        url: "images/tt7.png",
        title: "Destory Ec2 & S3",
      },
    ],
  },
};

// Global variables for screenshot navigation
let currentProjectId = null;
let currentImageIndex = 0;

// Show Project Details
function showProjectDetails(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  const detailsHtml = `
    <h2>${project.title} - Project Details</h2>
    
    <div class="detail-section">
      <h3><i class='bx bx-target-lock'></i> Project Overview</h3>
      <p>${project.details.overview}</p>
    </div>
    
    <div class="detail-section">
      <h3><i class='bx bx-arch'></i> Architecture</h3>
      <p>${project.details.architecture}</p>
    </div>
    
    <div class="detail-section">
      <h3><i class='bx bx-chip'></i> Key Technologies</h3>
      <div class="tech-list">
        ${project.details.technologies
          .map((tech) => <span class="tech-item">${tech}</span>)
          .join("")}
      </div>
    </div>
    
    <div class="detail-section">
      <h3><i class='bx bx-check-circle'></i> Main Features</h3>
      <ul style="color: #555; line-height: 1.8; padding-left: 20px;">
        ${project.details.features
          .map((feature) => <li>${feature}</li>)
          .join("")}
      </ul>
    </div>
  `;

  document.getElementById("detailsContent").innerHTML = detailsHtml;
  document.getElementById("detailsModal").style.display = "block";
}

// Show Project Screenshots
function showProjectScreenshots(projectId) {
  const project = projectsData[projectId];
  if (!project || !project.screenshots.length) return;

  currentProjectId = projectId;
  currentImageIndex = 0;

  // Update main image
  document.getElementById("currentScreenshot").src = project.screenshots[0].url;
  document.getElementById("screenshotTitle").textContent =
    project.screenshots[0].title;
  document.getElementById("screenshotCounter").textContent =
    1 / ${project.screenshots.length};

  // Create thumbnails
  const thumbnailsHtml = project.screenshots
    .map(
      (screenshot, index) => `
    <div class="thumbnail ${index === 0 ? "active" : ""}" onclick="changeImage(${index})">
      <img src="${screenshot.url}" alt="${screenshot.title}">
    </div>
  `,
    )
    .join("");

  document.getElementById("thumbnailsContainer").innerHTML = thumbnailsHtml;
  document.getElementById("screenshotsModal").style.display = "block";
}

// Change current image
function changeImage(index) {
  const project = projectsData[currentProjectId];
  if (!project || index < 0 || index >= project.screenshots.length) return;

  currentImageIndex = index;

  // Update main image
  document.getElementById("currentScreenshot").src =
    project.screenshots[index].url;
  document.getElementById("screenshotTitle").textContent =
    project.screenshots[index].title;
  document.getElementById("screenshotCounter").textContent =
    ${index + 1} / ${project.screenshots.length};

  // Update active thumbnail
  document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });
}

// Navigate to previous image
function prevImage() {
  const project = projectsData[currentProjectId];
  if (!project) return;

  let newIndex = currentImageIndex - 1;
  if (newIndex < 0) {
    newIndex = project.screenshots.length - 1;
  }

  changeImage(newIndex);
}

// Navigate to next image
function nextImage() {
  const project = projectsData[currentProjectId];
  if (!project) return;

  let newIndex = currentImageIndex + 1;
  if (newIndex >= project.screenshots.length) {
    newIndex = 0;
  }

  changeImage(newIndex);
}

// Close modal
function closeModal() {
  document.getElementById("detailsModal").style.display = "none";
  document.getElementById("screenshotsModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const detailsModal = document.getElementById("detailsModal");
  const screenshotsModal = document.getElementById("screenshotsModal");

  if (event.target == detailsModal) {
    detailsModal.style.display = "none";
  }

  if (event.target == screenshotsModal) {
    screenshotsModal.style.display = "none";
  }
};

// Keyboard navigation for screenshots
document.addEventListener("keydown", function (event) {
  const screenshotsModal = document.getElementById("screenshotsModal");
  if (screenshotsModal.style.display === "block") {
    if (event.key === "ArrowLeft") {
      prevImage();
    } else if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "Escape") {
      closeModal();
    }
  }
});






// Mobile Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});