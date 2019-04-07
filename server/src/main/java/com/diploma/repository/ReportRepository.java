package com.diploma.repository;

import com.diploma.entity.Report;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ReportRepository extends JpaRepository<Report, Long> {
  @Query(
      "SELECT DISTINCT rep FROM Report rep JOIN rep.user u JOIN rep.computer c " +
      "WHERE u.id=:userId and c.id=:computerId and rep.logoutTime is null")
  Optional<Report> findReportByUserIdAndComputerIdAndLogoutTimeIsNull(
      @Param("userId") Long userId,
      @Param("computerId") Long computerId
  );

  @Query(
          "SELECT rep FROM Report rep JOIN rep.user u JOIN rep.computer c " +
          "WHERE u.id=:userId and c.id=:computerId and rep.loginTime>:loginTime and rep.logoutTime<:logoutTime")
  List<Report> findAllByUserIdAndComputerIdAndLoginTimeAfterAndLogoutTimeBefore(
      @Param("userId") Long userId,
      @Param("computerId") Long computerId,
      @Param("loginTime") Instant loginTime,
      @Param("logoutTime") Instant logoutTime
  );

  @Query(
          "SELECT rep FROM Report rep JOIN rep.user u JOIN rep.computer c " +
          "WHERE u.id=:userId and c.id=:computerId and rep.loginTime>:loginTime")
  List<Report> findAllByUserIdAndComputerIdAndLoginTimeAfter(
          @Param("userId") Long userId,
          @Param("computerId") Long computerId,
          @Param("loginTime") Instant loginTime
  );

  @Query(
          "SELECT rep FROM Report rep JOIN rep.user u JOIN rep.computer c " +
          "WHERE u.id=:userId and c.id=:computerId and rep.logoutTime<:logoutTime")
  List<Report> findAllByUserIdAndComputerIdAndLogoutTimeBefore(
          @Param("userId") Long userId,
          @Param("computerId") Long computerId,
          @Param("logoutTime") Instant logoutTime
  );

  @Query(
          "SELECT rep FROM Report rep JOIN rep.user u JOIN rep.computer c " +
          "WHERE u.id=:userId and c.id=:computerId")
  List<Report> findAllByUserIdAndComputerId(
          @Param("userId") Long userId,
          @Param("computerId") Long computerId
  );
}
