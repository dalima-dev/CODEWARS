def solution(str, ending)
    return  str[-ending.length, ending.length ] == ending
end