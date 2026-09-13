import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as github from '@actions/github';

function execute() {
    core.notice('Hurray! I have successfully created JS Custom actions!');
}

execute();