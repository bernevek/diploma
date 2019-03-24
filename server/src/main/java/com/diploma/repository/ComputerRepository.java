package com.diploma.repository;

import com.diploma.entity.Computer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ComputerRepository extends JpaRepository<Computer, Long> {
    Optional<Computer> findComputerByLocalId(Long localId);
}
