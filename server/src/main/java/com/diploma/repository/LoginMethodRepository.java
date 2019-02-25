package com.diploma.repository;

import com.diploma.entity.LoginMethod;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginMethodRepository extends JpaRepository<LoginMethod, Long> {
}
