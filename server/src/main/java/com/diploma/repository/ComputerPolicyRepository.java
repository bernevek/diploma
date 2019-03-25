package com.diploma.repository;

import com.diploma.entity.ComputerPolicy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ComputerPolicyRepository extends JpaRepository<ComputerPolicy, Long> {
    @Query("SELECT cp FROM ComputerPolicy cp JOIN cp.computers c WHERE c.id=?1")
    Optional<ComputerPolicy> findComputerPolicyByComputerId(Long id);
}
