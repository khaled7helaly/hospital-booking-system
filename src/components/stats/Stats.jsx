import { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Stats.css";

const statsData = [
  { number: 20, suffix: "+", label: "Years of experience" },
  { number: 95, suffix: "%", label: "Patient satisfaction rating" },
  { number: 5000, suffix: "+", label: "Patients served annually" },
  { number: 10, suffix: "+", label: "Healthcare providers on staff" },
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef([]);

  useEffect(() => {
    const observers = [];
    const counters = [];

    statsRef.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) return;

          let start = 0;
          const end = statsData[index].number;
          const duration = 1500;
          const stepTime = Math.max(20, Math.floor(duration / end));

          const counter = setInterval(() => {
            start += 1;
            setCounts((previousCounts) => {
              const nextCounts = [...previousCounts];
              nextCounts[index] = Math.min(start, end);
              return nextCounts;
            });

            if (start >= end) clearInterval(counter);
          }, stepTime);

          counters.push(counter);
          observer.unobserve(element);
        },
        { threshold: 0.4 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      counters.forEach((counter) => clearInterval(counter));
    };
  }, []);

  return (
    <section className="stats-section">
      <Container>
        <Row className="stats-row">
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-item-wrapper"
              ref={(element) => {
                statsRef.current[index] = element;
              }}
            >
              <div className="stat-item">
                <div className="stat-number">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
