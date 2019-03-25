INSERT IGNORE INTO config_element(id, label, value)
VALUES(1, "WORD", "winword.exe"),
(2, "NOTEPAD", "notepad.exe"),
(3, "EXEL", "exel.exe"),
(4, "service1", "service1"),
(5, "service2", "service2"),
(6, "vk","vk.com"),
(7, "fb","www.facebook.com"),
(8, "google","www.google.com");

INSERT IGNORE INTO application(id)
VALUES(1),
(2),
(3);

INSERT IGNORE INTO service(id)
VALUES(4),
(5);

INSERT IGNORE INTO site(id)
VALUES(6),
(7),
(8);

INSERT IGNORE INTO base_policy(id, name)
VALUES(1, "Default user policy"),
(2, "Default computer policy");

INSERT IGNORE INTO user_policy(id)
VALUES(1);

INSERT IGNORE INTO computer_policy(id)
VALUES(2);

INSERT IGNORE INTO user(id, login, password, user_policy_id)
VALUES(1, "user", "password", 1);

INSERT IGNORE INTO computer(id, local_id, computer_name, local_user_name, ip, computer_policy_id)
VALUES (1, 132456789, "comp", "default user", "192.168.10.10", 2);

