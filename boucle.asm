section .data
    fmt db "%d", 10, 0

section .bss


section .text
    global _start

extern printf

_start:
    mov eax, 0

loop_start:
    cmp eax, 10
    jg end_loop

    push eax
    push fmt
    call printf
    add esp, 8

    inc eax

    jmp loop_start

end_loop:
    mov eax, 1
    xor ebx, ebx
    int 0x80
