create table todos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  text VARCHAR(255) NOT NULL CHECK(LENGTH(text) > 0),
  done BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE FUNCTION set_updated_at() RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'UPDATE') THEN
        NEW.updated_at := now();
        return NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_todo_updated_at BEFORE UPDATE ON todos FOR EACH ROW EXECUTE PROCEDURE set_updated_at();
