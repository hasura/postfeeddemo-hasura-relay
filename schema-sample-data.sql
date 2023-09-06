--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4 (Debian 15.4-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: foo; Type: TABLE; Schema: public; Owner: akshaya.acharya
--

CREATE TABLE public.foo (
    fooname text
);


ALTER TABLE public.foo OWNER TO "akshaya.acharya";

--
-- Name: labels; Type: TABLE; Schema: public; Owner: akshaya.acharya
--

CREATE TABLE public.labels (
    id integer NOT NULL,
    post_id integer NOT NULL,
    name text
);


ALTER TABLE public.labels OWNER TO "akshaya.acharya";

--
-- Name: labels_id_seq; Type: SEQUENCE; Schema: public; Owner: akshaya.acharya
--

CREATE SEQUENCE public.labels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.labels_id_seq OWNER TO "akshaya.acharya";

--
-- Name: labels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: akshaya.acharya
--

ALTER SEQUENCE public.labels_id_seq OWNED BY public.labels.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: akshaya.acharya
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    body text
);


ALTER TABLE public.posts OWNER TO "akshaya.acharya";

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: akshaya.acharya
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO "akshaya.acharya";

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: akshaya.acharya
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: akshaya.acharya
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text
);


ALTER TABLE public.users OWNER TO "akshaya.acharya";

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: akshaya.acharya
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO "akshaya.acharya";

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: akshaya.acharya
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: labels id; Type: DEFAULT; Schema: public; Owner: akshaya.acharya
--

ALTER TABLE ONLY public.labels ALTER COLUMN id SET DEFAULT nextval('public.labels_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: akshaya.acharya
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: akshaya.acharya
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: foo; Type: TABLE DATA; Schema: public; Owner: akshaya.acharya
--

COPY public.foo (fooname) FROM stdin;
foobar
\.


--
-- Data for Name: labels; Type: TABLE DATA; Schema: public; Owner: akshaya.acharya
--

COPY public.labels (id, post_id, name) FROM stdin;
1	1	Good
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: akshaya.acharya
--

COPY public.posts (id, user_id, body) FROM stdin;
1	1	Bob Post 1
2	1	Bob Post 2
3	2	Alice Post 2
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: akshaya.acharya
--

COPY public.users (id, name) FROM stdin;
1	Bob
2	Alice
\.


--
-- Name: labels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: akshaya.acharya
--

SELECT pg_catalog.setval('public.labels_id_seq', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: akshaya.acharya
--

SELECT pg_catalog.setval('public.posts_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: akshaya.acharya
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: labels labels_pkey; Type: CONSTRAINT; Schema: public; Owner: akshaya.acharya
--

ALTER TABLE ONLY public.labels
    ADD CONSTRAINT labels_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: akshaya.acharya
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: akshaya.acharya
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: labels labels_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: akshaya.acharya
--

ALTER TABLE ONLY public.labels
    ADD CONSTRAINT labels_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id);


--
-- Name: posts posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: akshaya.acharya
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

