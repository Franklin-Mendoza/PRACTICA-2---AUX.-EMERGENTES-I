let d = document.getElementById('display'), e = '0';

function a() { 
    d.textContent = e; 
}

function agregar(v) { 
    e = e === '0' && v !== '.' ? v : e + v; 
    a(); 
}

function calcular() { 
    try { 
        e = eval(e.replace(/x/g, '*')).toString(); 
    } catch { 
        e = 'Error'; 
        setTimeout(limpiar, 1000); 
    } 
    a(); 
}

function limpiar() { 
    e = '0'; 
    a(); 
}

function borrar() { 
    e = e.length > 1 ? e.slice(0, -1) : '0'; 
    a(); 
}

document.addEventListener('keydown', k => {
    if (k.key >= '0' && k.key <= '9' || k.key === '.') agregar(k.key);
    else if (['+', '-', '*', '/'].includes(k.key)) agregar(k.key);
    else if (k.key === 'Enter' || k.key === '=') calcular();
    else if (k.key === 'Escape' || k.key === 'c') limpiar();
    else if (k.key === 'Backspace') borrar();
    else if (k.key === 'x' || k.key === 'X') agregar('*');
});