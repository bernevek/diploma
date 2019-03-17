package com.diploma.repository;

import com.diploma.entity.UserPolicy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserPolicyRepository extends JpaRepository<UserPolicy, Long> {
    @Query("SELECT up FROM UserPolicy up JOIN up.users u WHERE u.id=?1")
    Optional<UserPolicy> findUserPolicyByUserId(Long id);
}
