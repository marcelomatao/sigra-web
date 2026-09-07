import { Link } from 'react-router-dom'
import { PublicHeader } from '../components/PublicHeader'
import { PublicFooter } from '../components/PublicFooter'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Check } from 'lucide-react'
import { useState } from 'react'

interface Plan {
  name: string
  price: {
    monthly: number
    annual: number
  }
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans: Plan[] = [
    {
      name: 'Free',
      price: {
        monthly: 0,
        annual: 0,
      },
      description: 'Perfect for trying out SigraChain',
      features: [
        '5 documents per month',
        '2 signers per document',
        'Email support',
        'Public verification',
        'Basic analytics',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Pro',
      price: {
        monthly: 29,
        annual: 24,
      },
      description: 'For professionals and small teams',
      features: [
        'Unlimited documents',
        '10 signers per document',
        'Priority support',
        'Advanced analytics',
        'Custom branding',
        'API access',
        'Audit logs',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Business',
      price: {
        monthly: 99,
        annual: 79,
      },
      description: 'For growing businesses',
      features: [
        'Everything in Pro',
        'Unlimited signers',
        'Bulk operations',
        'SSO integration',
        'Dedicated support',
        'Custom workflows',
        'SLA guarantee',
        'Advanced security',
      ],
      cta: 'Contact Sales',
    },
    {
      name: 'Enterprise',
      price: {
        monthly: 0,
        annual: 0,
      },
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Custom integrations',
        'On-premise deployment',
        '24/7 phone support',
        'Dedicated account manager',
        'Custom SLA',
        'Advanced compliance',
        'White-label solution',
      ],
      cta: 'Contact Sales',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />

      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Simple, transparent pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose the plan that fits your needs. All plans include blockchain-anchored signatures.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={isAnnual ? 'text-muted-foreground' : 'font-semibold'}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-7 rounded-full transition-colors"
                style={{
                  backgroundColor: isAnnual ? 'var(--primary)' : 'var(--border)',
                }}
              >
                <div
                  className="absolute top-1 w-5 h-5 rounded-full bg-white transition-transform"
                  style={{
                    transform: isAnnual ? 'translateX(2rem)' : 'translateX(0.25rem)',
                  }}
                />
              </button>
              <span className={isAnnual ? 'font-semibold' : 'text-muted-foreground'}>
                Annual
                <span className="ml-2 text-sm text-primary font-semibold">
                  Save 20%
                </span>
              </span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-xl border bg-card transition-all ${
                  plan.popular
                    ? 'border-primary shadow-lg scale-105'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {plan.price.monthly === 0 ? (
                    <div className="text-4xl font-bold">Free</div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  )}
                  {isAnnual && plan.price.monthly > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually (${plan.price.annual * 12}/year)
                    </p>
                  )}
                </div>

                <Link to="/register" className="block mb-6">
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Can I change plans later?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
                },
                {
                  q: 'Is there a free trial?',
                  a: 'Yes, all paid plans come with a 14-day free trial. No credit card required.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
                },
                {
                  q: 'Can I cancel anytime?',
                  a: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.',
                },
              ].map((faq, index) => (
                <div key={index} className="p-6 rounded-xl bg-background border border-border">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <PublicFooter />
    </div>
  )
}
