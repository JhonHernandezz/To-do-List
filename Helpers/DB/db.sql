use TodoList

ALTER TABLE list ADD CONSTRAINT fk_lis_user FOREIGN KEY (id_user) REFERENCES user (id);
ALTER TABLE list ADD CONSTRAINT fk_lis_state FOREIGN KEY (id_state) REFERENCES state (id);
ALTER TABLE audit ADD CONSTRAINT fk_audit_list FOREIGN KEY (id_list) REFERENCES list (id);

select * from user;

select * from user where username = 'nicolas';

INSERT INTO state (id, description) VALUES
(1, 'por hacer'),
(2, 'en progreso'),
(3, 'terminado');

INSERT INTO list (id, id_user, id_state, date_start, date_end, name, description) VALUES
(1, 1, 1, "2023/09/18", "2023/09/18",  'Tarea de ingles', 'Desarrollar la tarea de ingles'),
(2, 1, 2,  "2023/09/18", "2023/09/20", 'Tarea de biologia', 'Desarrollar la tarea de biologia'),
(3, 2, 3,  "2023/09/18",  "2023/09/28", 'Tarea de español', 'Desarrollar la tarea de español');


select name, list.description, state.description, date_start, date_end from list INNER JOIN state ON list.id_state = state.id where id_user = 1;

SELECT * FROM list WHERE id = 1;