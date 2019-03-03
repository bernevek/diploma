INSERT INTO config_element(id, label, value)
VALUES(1, "WORD", "winword.exe"),
(2, "NOTEPAD", "notepad.exe"),
(3, "EXEL", "exel.exe"),
(4, "password", "password"),
(5, "finger print", "fingerPrint"),
(6, "vk","vk.com"),
(7, "fb","facebook.com"),
(8, "mail.ru","mail.ru");

INSERT INTO application(id)
VALUES(1),
(2),
(3);

INSERT INTO login_method(id)
VALUES(4),
(5);

INSERT INTO site(id)
VALUES(6),
(7),
(8);

INSERT INTO base_policy(id, name)
VALUES(1, "Default user policy");

INSERT INTO user_policy(id)
VALUES(1);

INSERT INTO policy_apps(policy_id, app_id)
VALUES(1, 1),
(1, 2),
(1, 3);

INSERT INTO policy_login_methods(policy_id, login_method_id)
VALUES(1, 4),
(1, 5);

INSERT INTO policy_sites(policy_id, site_id)
VALUES(1, 6),
(1, 7),
(1, 8);
