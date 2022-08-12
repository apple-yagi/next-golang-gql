package models

import "time"

type Todo struct {
	ID        int       `json:"id" db:"id"`
	Text      string    `json:"text" db:"text"`
	Done      bool      `json:"done" db:"done"`
	CreatedAt time.Time `json:"createdAt" db:"created_at"`
	UpdatedAt time.Time `json:"updatedAt" db:"updated_at"`
}

type CreateTodoInput struct {
	Text string `json:"text"`
}
