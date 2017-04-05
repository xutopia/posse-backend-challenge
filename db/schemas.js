// MySQL database schemas that can be used to create a new MySQL DB when needed

// locations table
// CREATE TABLE `locations` (
//   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
//   `public_id` char(7) DEFAULT NULL,
//   `locality` varchar(20) DEFAULT NULL,
//   `region` char(2) DEFAULT NULL,
//   `postal_code` char(5) DEFAULT NULL,
//   `country` char(2) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


// services table
// CREATE TABLE `services` (
//   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
//   `platform` varchar(15) DEFAULT NULL,
//   `location` int(11) unsigned DEFAULT NULL,
//   PRIMARY KEY (`id`),
//   KEY `locationId` (`location`),
//   CONSTRAINT `locationId` FOREIGN KEY (`location`) REFERENCES `locations` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


// programmers table
// CREATE TABLE `programmers` (
//   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
//   `name` varchar(20) DEFAULT NULL,
//   `favorite_color` varchar(20) DEFAULT NULL,
//   `age` int(11) DEFAULT NULL,
//   `weight` float DEFAULT NULL,
//   `phone` char(10) DEFAULT NULL,
//   `is_artist` tinyint(1) DEFAULT NULL,
//   `service` int(11) unsigned DEFAULT NULL,
//   PRIMARY KEY (`id`),
//   KEY `serviceId` (`service`),
//   CONSTRAINT `serviceId` FOREIGN KEY (`service`) REFERENCES `services` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
