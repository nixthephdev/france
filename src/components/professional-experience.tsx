import { ArrowUpRight, ChevronDown } from "lucide-react";
import { experience } from "@/lib/experience";
import { linkedInUrl } from "@/lib/site-content";

const monthYear = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(date: string) {
  return monthYear.format(new Date(`${date}-01T00:00:00Z`));
}

export function ProfessionalExperience() {
  return (
    <section className="experience-section shell" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <h2 id="experience-title">Professional experience.</h2>
        <a className="text-link" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          View on LinkedIn<ArrowUpRight size={18} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <p className="section-intro">Leadership, advisory work and a foundation in healthcare.</p>

      <ul className="experience-list">
        {experience.map((organisation) => (
          <li className="experience-group" key={organisation.id}>
            <h3 className="experience-organisation" translate="no">{organisation.name}</h3>
            <ul className="experience-roles">
              {organisation.roles.map((role) => (
                <li className="experience-role" key={`${role.title}-${role.startDate}`}>
                  <h4>{role.title}</h4>
                  <p className="experience-meta">
                    <span>
                      <time dateTime={role.startDate}>{formatDate(role.startDate)}</time>
                      {" – "}
                      {role.endDate ? <time dateTime={role.endDate}>{formatDate(role.endDate)}</time> : "Present"}
                    </span>
                    {role.employmentType && <span>{role.employmentType}</span>}
                  </p>
                  <details className="experience-details">
                    <summary>
                      Role details
                      <span className="sr-only"> for {role.title} at {organisation.name}</span>
                      <ChevronDown size={17} aria-hidden="true" />
                    </summary>
                    <div className="experience-description">
                      {role.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
