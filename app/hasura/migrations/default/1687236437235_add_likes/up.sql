create table likes (
  id serial primary key,
  user_id integer not null references users (id),
  post_id integer not null references posts (id),
  created_at timestamptz not null default now()
);