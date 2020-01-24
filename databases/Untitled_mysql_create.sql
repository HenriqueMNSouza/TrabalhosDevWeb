CREATE TABLE `escola.administrador` (
	`id` INT(11) NOT NULL,
	`nome` varchar(50) NOT NULL,
	`login` varchar(50) NOT NULL UNIQUE,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `escola.alunos` (
	`id` INT(11) NOT NULL,
	`cpf` varchar(11) NOT NULL UNIQUE,
	`nome` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL UNIQUE,
	`celular` varchar(14) NOT NULL UNIQUE,
	`login` varchar(20) NOT NULL UNIQUE,
	`senha` varchar(255) NOT NULL,
	`endereco` varchar(50),
	`cidade` varchar(30),
	`bairro` varchar(30),
	`cep` varchar(9),
	PRIMARY KEY (`id`)
);

CREATE TABLE `escola.instrutores` (
	`id` INT(11) NOT NULL,
	`nome` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL UNIQUE,
	`valor_hora` INT(10),
	`login` varchar(20) NOT NULL UNIQUE,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `escola.cursos` (
	`id` INT(10) NOT NULL,
	`nome` varchar(50) NOT NULL,
	`requisito` varchar(255),
	`ementa` varchar(255),
	`carga_horaria` INT(5),
	`preco` DECIMAL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `escola.turmas` (
	`id` INT(10) NOT NULL,
	`instrutores_id` INT(11) NOT NULL,
	`cursos_id` INT(10) NOT NULL,
	`data_inicio` DATE,
	`data_fim` DATE,
	`carga_horaria` INT(5),
	PRIMARY KEY (`id`)
);

CREATE TABLE `escola.matriculas` (
	`id` INT(10) NOT NULL,
	`turmas_id` INT(10) NOT NULL,
	`alunos_id` INT(11) NOT NULL,
	`data_matricula` DATE,
	`nota` DECIMAL((11,0)),
	PRIMARY KEY (`id`)
);

ALTER TABLE `escola.turmas` ADD CONSTRAINT `escola.turmas_fk0` FOREIGN KEY (`instrutores_id`) REFERENCES `escola.instrutores`(`id`);

ALTER TABLE `escola.turmas` ADD CONSTRAINT `escola.turmas_fk1` FOREIGN KEY (`cursos_id`) REFERENCES `escola.cursos`(`id`);

ALTER TABLE `escola.matriculas` ADD CONSTRAINT `escola.matriculas_fk0` FOREIGN KEY (`turmas_id`) REFERENCES `escola.turmas`(`id`);

ALTER TABLE `escola.matriculas` ADD CONSTRAINT `escola.matriculas_fk1` FOREIGN KEY (`alunos_id`) REFERENCES `escola.alunos`(`id`);

