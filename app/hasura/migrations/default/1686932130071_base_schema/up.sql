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
  starred boolean not null default false,
  created_at timestamptz not null default now()
);