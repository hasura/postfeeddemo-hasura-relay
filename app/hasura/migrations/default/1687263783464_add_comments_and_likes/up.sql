create table comments (
  id serial primary key,
  post_id integer not null references posts (id),
  body text,
  created_at timestamptz not null default now()
);

create table comments_likes (
  id serial primary key,
  user_id integer not null references users (id),
  comment_id integer not null references comments (id),
  created_at timestamptz not null default now()
);