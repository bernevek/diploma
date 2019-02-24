INSERT INTO application(label, value) VALUES("WORD", "word.exe");
INSERT INTO application(label, value) VALUES("NOTEPAD", "notepad.exe");
INSERT INTO application(label, value) VALUES("EXEL", "exel.exe");

INSERT INTO login_method(label, value) VALUES("password", "password");
INSERT INTO login_method(label, value) VALUES("finger print", "fingerPrint");

INSERT INTO site(label, value) VALUES("vk","vk.com");
INSERT INTO site(label, value) VALUES("fb","facebook.com");
INSERT INTO site(label, value) VALUES("mail.ru","mail.ru");

INSERT INTO user_policy(name) VALUES("Default user policy");

INSERT INTO computer_policy(name) VALUES("Default computer policy");

INSERT INTO computer(name, login, password, ip, computer_policy_id)
  VALUES("Default computer", "computer", "password", "192.168.10.10", 0);

INSERT INTO user(login, password, user_policy_id)
VALUES("user", "password", 0);
