// Mirrors sigra-service DTOs exactly (snake_case = the wire format).

// DocumentRes — sigra-service/src/routes/documents.rs
export interface ApiDocument {
  id: string
  filename: string
  content_type: string
  size_bytes: number
  hash: string
  created_at: string
}

// SignerRes — sigra-service/src/routes/envelopes.rs
export interface ApiSigner {
  id: string
  name: string
  email: string | null
  wallet_address: string | null
  order: number
  status: 'pending' | 'signed' | 'declined' | 'expired'
  signed_at: string | null
}

// EnvelopeRes — sigra-service/src/routes/envelopes.rs
export interface ApiEnvelope {
  id: string
  document_id: string
  title: string
  status: 'draft' | 'pending' | 'completed' | 'anchored' | 'expired'
  signing_order: 'parallel' | 'sequential'
  deadline: string | null
  attestation_uid: string | null
  signers: ApiSigner[]
  created_at: string
}

// HashResult — sigra-service/src/services/verification.rs (de-identified form:
// verification status only, no document_id/filename leakage)
export interface ApiHashResult {
  hash: string
  found: boolean
  anchored: boolean
  attestation_uid: string | null
  merkle_root: string | null
  chain_id: number | null
}

// send_envelope response — sigra-service/src/routes/signing.rs
export interface ApiSendResult {
  id: string
  status: 'pending'
  signers: number
  signing_tokens: Record<string, string> // signer_id → one-time token
}

// error body — sigra-service/src/error.rs (generic messages + correlation id)
export interface ApiError {
  error: string
  message: string
  correlation_id: string
}
