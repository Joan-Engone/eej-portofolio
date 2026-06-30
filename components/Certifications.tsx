"use client";
import { useState } from "react";

interface Certification {
  icon: string;
  issuer: string;
  title: string;
  description: string;
  credentialHref?: string;      
  certificateImage: string; 
}

const certifications: Certification[] = [
  {
    icon: "workspace_premium",
    issuer: "UDEMY",
    title: "Software Architecture & Design of Modern Large Scale Systems",
    description: "Mastering design patterns, microservices, and enterprise scalability principles for modern high-load systems.",
    certificateImage: "/certificates/udemy-software-architecture.jpg",   // ← Add your image path
  },
 {
  icon: "code",
  issuer: "UDEMY",
  title: "Master React.js with AI: From Basics to Advanced Development",
  description: "Built modern React applications and integrated AI tools into development workflows.",
  certificateImage: "/certificates/ReactCertificate.jpg",
},

  {
    icon: "computer",
    issuer: "CISCO",
    title: "Operating Systems Basics",
    description: "Fundamental understanding of operating systems, process management, and file systems architecture.",
    certificateImage: "/certificates/cisco-os-basics.jpg",
  },
  {
    icon: "lan",
    issuer: "CISCO",
    title: "Networking Essentials",
    description: "Comprehensive understanding of IP networking, security, and router configuration.",
    certificateImage: "/certificates/NetworkingEssentials.jpg",
  },

  {
    icon: "settings_input_component",
    issuer: "INTERNET SOCIETY",
    title: "Introduction to Network Operations",
    description: "Gaining core skills for managing and troubleshooting networked environments effectively.",
    certificateImage: "/certificates/NetworkOperations.jpg",
  },

  {
    icon: "hub",
    issuer: "INTERNET SOCIETY",
    title: "Advanced Network Operations 2.0",
    description: "Expert-level training in managing complex network infrastructures and internet protocols.",
    certificateImage: "/certificates/NetworkOperations2.jpg",
  },
  
  {
    icon: "insights",
    issuer: "CISCO",
    title: "Introduction to Data Science",
    description: "Exploring data analysis, statistics, and machine learning fundamentals for business intelligence.",
    certificateImage: "/certificates/DataScience.jpg",
  },
  {
    icon: "terminal",
    issuer: "NDG",
    title: "NDG Linux Essentials",
    description: "In-depth knowledge of Linux command line, open source philosophy, and system administration.",
    certificateImage: "/certificates/CiscoNetworkingAcademy.jpg",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-section-padding bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4">VERIFIED EXPERTISE</p>
          <h2 className="font-headline-md text-headline-md">Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.title} className="neomorph-card p-8 rounded-3xl flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl neomorph-inset flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-3xl">{cert.icon}</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-secondary">{cert.issuer}</p>
                  <h4 className="font-title-sm text-title-sm">{cert.title}</h4>
                </div>
              </div>

              <p className="text-secondary text-body-base mb-6 flex-grow">{cert.description}</p>

              <button
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all mt-auto group"
              >
                VIEW CREDENTIAL
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
          <div className="bg-surface-container max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-outline">
              <div>
                <p className="text-sm text-secondary">{selectedCert.issuer}</p>
                <h3 className="font-title-sm text-title-sm">{selectedCert.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-on-surface-variant hover:text-on-surface p-2"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>

            {/* Certificate Image */}
            <div className="p-6 bg-surface-container-low flex justify-center">
              <img
                src={selectedCert.certificateImage}
                alt={selectedCert.title}
                className="max-h-[75vh] w-auto rounded-2xl shadow-lg object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 text-center text-on-surface-variant text-sm">
              Click outside or press ESC to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
}