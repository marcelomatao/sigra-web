import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { PublicHeader } from '../components/PublicHeader'
import { PublicFooter } from '../components/PublicFooter'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { 
  Shield, 
  Clock, 
  Lock, 
  FileSignature, 
  Zap,
  Globe,
  Award
} from 'lucide-react'

export function LandingPage() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Shield,
      title: t('landing.features.independent.title'),
      description: t('landing.features.independent.description'),
    },
    {
      icon: Clock,
      title: t('landing.features.permanent.title'),
      description: t('landing.features.permanent.description'),
    },
    {
      icon: Zap,
      title: t('landing.features.costEffective.title'),
      description: t('landing.features.costEffective.description'),
    },
  ]

  const benefits = [
    {
      icon: Lock,
      title: 'Tamper-Proof',
      description: 'Every signature is cryptographically signed and anchored on-chain, making it impossible to alter.',
    },
    {
      icon: FileSignature,
      title: 'Legally Valid',
      description: 'Compliant with eIDAS, ESIGN Act, and other major electronic signature regulations worldwide.',
    },
    {
      icon: Globe,
      title: 'Global Verification',
      description: 'Anyone can verify document authenticity using the public verification portal—no account needed.',
    },
    {
      icon: Award,
      title: 'Enterprise Ready',
      description: 'SOC 2 Type II compliant with SLA guarantees, SSO, and dedicated support for enterprise clients.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              {t('landing.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t('landing.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/register">
                <Button variant="primary" size="lg">
                  {t('landing.hero.cta')}
                </Button>
              </Link>
              <Link to="/verify">
                <Button variant="secondary" size="lg">
                  {t('landing.hero.ctaSecondary')}
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required • 5 free documents per month
            </p>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('landing.features.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on Ethereum L2 (Base & Arbitrum) for transparent, permanent proof
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose SigraChain?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most trusted platform for blockchain-anchored electronic signatures
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-background border border-border"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Documents Signed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of businesses using SigraChain for secure, verifiable signatures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/register">
                <Button variant="primary" size="lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="secondary" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <PublicFooter />
    </div>
  )
}
