import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeToggle } from './components/ThemeToggle'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Badge } from './components/Badge'
import { Input } from './components/Input'
import { Textarea } from './components/Textarea'
import { Select } from './components/Select'
import { Modal } from './components/Modal'
import { Skeleton, SkeletonCard, SkeletonList } from './components/Skeleton'
import { EmptyState } from './components/EmptyState'
import { useToast } from './components/ToastProvider'

function UIComponentsDemo() {
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { showToast } = useToast()

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="heading-1 mb-2">UI Components Library</h1>
          <p className="text-muted">Step 3: Comprehensive reusable components</p>
        </div>
        <ThemeToggle />
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="heading-2 mb-6">Buttons</h2>
          <Card>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-4">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-4">States</h3>
                <div className="flex flex-wrap gap-3">
                  <Button disabled>Disabled</Button>
                  <Button loading={loading} onClick={handleLoadingClick}>
                    {loading ? 'Loading...' : 'Click to Load'}
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-4">With Icons</h3>
                <div className="flex flex-wrap gap-3">
                  <Button icon={<span>✓</span>}>Confirm</Button>
                  <Button variant="secondary" icon={<span>↓</span>}>Download</Button>
                  <Button variant="danger" icon={<span>×</span>}>Delete</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="heading-2 mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="interactive">
              <h3 className="heading-3 mb-3">Interactive Card</h3>
              <p className="text-muted">This card has hover effects and can be clicked.</p>
            </Card>
            <Card variant="flat">
              <h3 className="heading-3 mb-3">Flat Card</h3>
              <p className="text-muted">This card has no hover effects.</p>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="heading-2 mb-6">Badges</h2>
          <Card>
            <div className="flex flex-wrap gap-3">
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="heading-2 mb-6">Form Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  helperText="We'll never share your email"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  error="Password must be at least 8 characters"
                />
                <Input
                  label="Disabled Input"
                  disabled
                  placeholder="Cannot edit this"
                />
              </div>
            </Card>
            <Card>
              <div className="space-y-4">
                <Textarea
                  label="Message"
                  placeholder="Write your message..."
                  rows={4}
                  helperText="Max 500 characters"
                />
                <Select label="Country">
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="br">Brazil</option>
                  <option value="uk">United Kingdom</option>
                </Select>
              </div>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="heading-2 mb-6">Modal</h2>
          <Card>
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Example Modal"
            >
              <div className="space-y-4">
                <p className="text-muted">
                  This is a modal dialog with backdrop blur and smooth animations.
                  Press ESC or click outside to close.
                </p>
                <Input label="Your Name" placeholder="Enter your name" />
                <div className="flex gap-3 justify-end">
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setModalOpen(false)}>
                    Confirm
                  </Button>
                </div>
              </div>
            </Modal>
          </Card>
        </section>

        <section>
          <h2 className="heading-2 mb-6">Toast Notifications</h2>
          <Card>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                onClick={() => showToast('success', 'Operation completed successfully!')}
              >
                Success Toast
              </Button>
              <Button
                variant="danger"
                onClick={() => showToast('error', 'Something went wrong!')}
              >
                Error Toast
              </Button>
              <Button
                variant="secondary"
                onClick={() => showToast('warning', 'Please review your input')}
              >
                Warning Toast
              </Button>
              <Button
                variant="ghost"
                onClick={() => showToast('info', 'Here is some information')}
              >
                Info Toast
              </Button>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="heading-2 mb-6">Skeleton Loading</h2>
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-4">Basic Skeletons</h3>
              <div className="space-y-3">
                <Skeleton variant="text" />
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="rectangular" height="100px" />
                <Skeleton variant="circular" width={64} height={64} />
              </div>
            </div>
            <div>
              <h3 className="heading-3 mb-4">Skeleton Card</h3>
              <SkeletonCard />
            </div>
            <div>
              <h3 className="heading-3 mb-4">Skeleton List</h3>
              <SkeletonList count={3} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="heading-2 mb-6">Empty States</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <EmptyState
                icon="inbox"
                title="No messages"
                description="Your inbox is empty. Messages will appear here."
              />
            </Card>
            <Card>
              <EmptyState
                icon="file"
                title="No documents"
                description="Upload your first document to get started."
                action={<Button>Upload Document</Button>}
              />
            </Card>
            <Card>
              <EmptyState
                icon="search"
                title="No results"
                description="Try adjusting your search criteria."
              />
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UIComponentsDemo />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
