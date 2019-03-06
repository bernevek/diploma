INSERT IGNORE INTO config_element(id, label, value)
VALUES(1, "WORD", "winword.exe"),
(2, "NOTEPAD", "notepad.exe"),
(3, "EXEL", "exel.exe"),
(4, "password", "password"),
(5, "finger print", "fingerPrint"),
(6, "vk","vk.com"),
(7, "fb","www.facebook.com"),
(8, "google","www.google.com");

INSERT IGNORE INTO application(id)
VALUES(1),
(2),
(3);

INSERT IGNORE INTO login_method(id)
VALUES(4),
(5);

INSERT IGNORE INTO site(id)
VALUES(6),
(7),
(8);

INSERT IGNORE INTO base_policy(id, name)
VALUES(1, "Default user policy");

INSERT IGNORE INTO user_policy(id)
VALUES(1);

