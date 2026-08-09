-- Waitlist with referral. Constraints are the source of truth.
-- Rollback: see 001_waitlist.down.sql

CREATE TABLE IF NOT EXISTS waitlist_entry (
  id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email       text        NOT NULL UNIQUE
                          CHECK (email = lower(email) AND position('@' in email) > 1),
  code        text        NOT NULL UNIQUE
                          CHECK (char_length(code) BETWEEN 6 AND 16),
  referred_by bigint      REFERENCES waitlist_entry(id) ON DELETE SET NULL,
  created_at  timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT no_self_referral CHECK (referred_by IS NULL OR referred_by <> id)
);

CREATE INDEX IF NOT EXISTS idx_waitlist_referred_by ON waitlist_entry (referred_by);
CREATE INDEX IF NOT EXISTS idx_waitlist_rank ON waitlist_entry (created_at);
