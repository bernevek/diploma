package com.diploma.service.impl;

import com.diploma.entity.Computer;
import com.diploma.repository.ComputerRepository;
import com.diploma.service.ComputerService;
import localhost._8080.isecurity.ComputerDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ComputerServiceImpl implements ComputerService{

    @Autowired
    ComputerRepository computerRepository;

    @Override
    public ComputerDetails saveComputer(ComputerDetails computerDetails) {
        Optional<Computer> computerOptional = computerRepository.findComputerByLocalId(computerDetails.getLocalId());
        Computer computer = null;
        if (computerOptional.isPresent()) {
            computer = computerOptional.get();
            computer.setComputerName(computerDetails.getComputerName());
            computer.setLocalUserName(computerDetails.getLocalUserName());
            computer.setIp(computerDetails.getIp());
            computerRepository.save(computer);
            computerDetails.setServerId(computer.getId());
        } else {
            computer = new Computer();
            computer.setLocalId(computerDetails.getLocalId());
            computer.setComputerName(computerDetails.getComputerName());
            computer.setLocalUserName(computerDetails.getLocalUserName());
            computer.setIp(computerDetails.getIp());
            computer = computerRepository.save(computer);
            computerDetails.setServerId(computer.getId());
        }
        return computerDetails;
    }
}
