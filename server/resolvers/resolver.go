package resolvers

import (
	"context"
	"log"

	"github.com/apple-yagi/next-golang-gql/server/graph/generated"
	"github.com/apple-yagi/next-golang-gql/server/models"
	"github.com/jmoiron/sqlx"
)

type Resolver struct {
	db *sqlx.DB
}

func NewResolver(db *sqlx.DB) *Resolver {
	return &Resolver{db}
}

func (r *mutationResolver) CreateTodo(ctx context.Context, input models.CreateTodoInput) (*models.Todo, error) {
	query := "INSERT INTO todos (text) VALUES ($1) RETURNING id"
	rows, err := r.db.Query(query, input.Text)
	if err != nil {
		log.Print(err)
		return nil, err
	}

	var id string
	if rows.Next() {
		rows.Scan(&id)
	}

	log.Print(id)

	todos := []models.Todo{}
	err = r.db.Select(&todos, "SELECT * FROM todos WHERE id = $1", id)
	if err != nil {
		log.Print(err)
		return nil, err
	}

	return &todos[0], nil
}

func (r *queryResolver) Todos(ctx context.Context) ([]models.Todo, error) {
	todos := []models.Todo{}
	err := r.db.Select(&todos, "SELECT * FROM todos")
	if err != nil {
		log.Print(err)
		return nil, err
	}
	return todos, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
