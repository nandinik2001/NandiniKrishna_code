package com.example.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.employee.model.emp;

public interface EmployeeRepository extends JpaRepository<emp, Long> {
}
