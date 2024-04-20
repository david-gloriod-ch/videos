const times = [];

for (let i = 0; i < 20; i++)
{
    const hour = `${parseInt(Math.random() * 24)}`.padStart(2, "0");
    const minut = `${parseInt(Math.random() * 60)}`.padStart(2, "0");
    const second = `${parseInt(Math.random() * 60)}`.padStart(2, "0");

    times.push(`${hour}:${minut}:${second}`);
}

console.log(`<Heures>:<Minutes>:<Secondes>`);
console.log(times.join("\n"));