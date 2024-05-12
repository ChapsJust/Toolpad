DROP TABLE IF EXISTS sous_taches;
DROP TABLE IF EXISTS taches;
DROP TABLE IF EXISTS utilisateur;

create table utilisateur(
	utilisateur_id SERIAL primary key,
	nom VARCHAR(30),
	prenom VARCHAR(30),
	courriel Varchar(255),
	cle_api VARCHAR(50),
	password VARCHAR(100)
);

CREATE TABLE taches (
    tache_id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER,
    titre VARCHAR(100),
    description VARCHAR(500),
    date_debut DATE,
    date_echeance DATE,
    complete SMALLINT,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(utilisateur_id)
);


create table sous_taches(
	sous_taches_id SERIAL primary key,
	tache_id INTEGER,
	titre VARCHAR(100),
	complete SMALLINT,
	foreign key(tache_id) references taches(tache_id)
);

INSERT INTO utilisateur (nom, prenom, courriel, cle_api, password)
VALUES ('Chaput', 'Justin', 'john.doe@example.com', '182ebdd9-41a3-4634-a59b-2698ab13421b', 'qwerty');