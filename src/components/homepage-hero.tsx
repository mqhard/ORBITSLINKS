"use client";

import { useEffect, useState, type FormEvent } from "react";
import { homepageContent, homepageMarkets } from "@/content/homepage";
import { useSitePreferences } from "@/components/site-preferences";
import { useRouter } from "next/navigation";
import { saveOrbitState, normalizeDomain } from "@/lib/orbit-store";

export function HomepageHero() {
  const router = useRouter();
  const { locale } = useSitePreferences();
  const content = homepageContent[locale];
  const markets = homepageMarkets[locale];
  const [domain, setDomain] = useState("");
  const [message, setMessage] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [market, setMarket] = useState("SA");

  useEffect(() => {
    if (isInvalid) {
      setMessage(content.invalidDomain);
    } else if (message) {
      setMessage(content.demoNotice);
    }
  }, [content.demoNotice, content.invalidDomain, isInvalid, locale]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!normalizeDomain(domain)) {
      setIsInvalid(true);
      setMessage(content.invalidDomain);
      return;
    }

    setIsInvalid(false);
    saveOrbitState(s => ({ ...s, profile: { ...s.profile, domain: normalizeDomain(domain), market } }));
    router.push("/start/");
  }

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            ORBITS LINKS
          </div>
          <h1 id="hero-title">{content.headline}</h1>
          <p className="hero-description">{content.description}</p>

          <form className="domain-form" id="domain-form" onSubmit={handleSubmit} noValidate>
            <label className="field domain-field">
              <span>{content.domainLabel}</span>
              <input
                autoComplete="url"
                aria-invalid={isInvalid}
                aria-describedby={message ? "form-message" : undefined}
                dir="ltr"
                inputMode="url"
                onChange={(event) => {
                  setDomain(event.target.value);
                  if (isInvalid) {
                    setIsInvalid(false);
                    setMessage("");
                  }
                }}
                placeholder={content.domainPlaceholder}
                type="text"
                value={domain}
              />
            </label>
            <label className="field market-field">
              <span>{content.marketLabel}</span>
              <select value={market} onChange={e => setMarket(e.target.value)}>
                {markets.map((market) => (
                  <option key={market.value} value={market.value}>
                    {market.label}
                  </option>
                ))}
              </select>
            </label>
            <button className="primary-button" type="submit">
              {content.submit}
              <span aria-hidden="true" className="button-arrow">
                ↗
              </span>
            </button>
          </form>
          <p
            className={`form-message${isInvalid ? " form-message-error" : ""}`}
            id="form-message"
            aria-live="polite"
          >
            {message}
          </p>
        </div>
        <div className="hero-decoration" aria-hidden="true">
          <span className="orbit-node node-one" />
          <span className="orbit-node node-two" />
          <span className="orbit-node node-three" />
          <span className="orbit-core" />
        </div>
    </section>
  );
}
