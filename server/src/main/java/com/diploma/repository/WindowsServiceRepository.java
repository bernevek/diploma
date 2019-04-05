package com.diploma.repository;

import com.diploma.entity.WindowsService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WindowsServiceRepository extends JpaRepository<WindowsService, Long> {}
