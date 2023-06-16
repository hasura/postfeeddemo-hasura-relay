create table users (
  id serial primary key,
  name text,
  created_at timestamptz not null default now()
);

create table posts (
  id serial primary key,
  user_id integer not null references users (id),
  title text not null,
  body text,
  created_at timestamptz not null default now()
);

create table stars (
  id serial primary key,
  user_id integer not null references users (id),
  post_id integer not null references posts (id),
  created_at timestamptz not null default now()
);
