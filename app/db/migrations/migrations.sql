users
saves

DROP DATABASE coinwatch;
CREATE DATABASE coinwatch;

CREATE TABLE users (id SERIAL PRIMARY KEY,
                    email VARCHAR() NOT NULL,
                    name VARCHAR()
                   );

CREATE TABLE saves (id SERIAL PRIMARY KEY,

                   );

-- firebase really might be the better choice...

-- /users
--   #id
--   email
--   name
-- /saves
--   #id
--   ?published
--   /data
--     ?snapshot
--     type
--     start_time
--     end_time
--     interval
--     ?aggregate
--     base
--     format
--     outputs
