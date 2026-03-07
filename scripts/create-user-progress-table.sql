-- Creazione tabella user_progress per tracciare il progresso degli utenti
CREATE TABLE IF NOT EXISTS user_progress (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  content_type VARCHAR(50) NOT NULL, -- 'course', 'article', 'quiz'
  content_id INTEGER NOT NULL,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, content_type, content_id)
);

-- Indici per migliorare le performance
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_content ON user_progress(content_type, content_id);
