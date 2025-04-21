import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Sarthak Yeole</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#about" className="px-3 py-2 text-sm font-medium hover:underline">
                About
              </Link>
              <Link href="#experience" className="px-3 py-2 text-sm font-medium hover:underline">
                Experience
              </Link>
              <Link href="#skills" className="px-3 py-2 text-sm font-medium hover:underline">
                Skills
              </Link>
              <Link href="#projects" className="px-3 py-2 text-sm font-medium hover:underline">
                Projects
              </Link>
              <Link href="#contact" className="px-3 py-2 text-sm font-medium hover:underline">
                Contact
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Sarthak Yeole</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-[700px]">
            Competitive Programmer | Developer | Web3 & Cloud Enthusiast
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-[600px]">
            A passionate Computer Science sophomore at IIITDM Jabalpur, dedicated to solving complex problems and
            building innovative solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </section>

        {/* Competitive Programming Profiles */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Competitive Programming Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="https://codeforces.com/profile/SDY_25" target="_blank" rel="noopener noreferrer">
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-bold">Codeforces</CardTitle>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M5 8a4 4 0 1 0 8 0 4 4 0 1 0-8 0M12 8a4 4 0 1 0 8 0 4 4 0 1 0-8 0M5 16a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
                  </svg> */}
                  <img
                    src="/codeforces.png"
                    alt="Codeforces Logo"
                    className="w-6 h-6"
                  />
                </CardHeader>
                <CardContent>
                  <CardDescription>View my Codeforces profile and submissions</CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://www.codechef.com/users/yeolesarthak" target="_blank" rel="noopener noreferrer">
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-bold">CodeChef</CardTitle>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M15 11h.01M11 15h.01M16 16h.01M10 11h.01M15 6h.01M8 9h.01" />
                    <path d="M6 20a2 2 0 0 1-2-2c0-2.25 2-4.5 2-4.5s2 2.25 2 4.5a2 2 0 0 1-2 2z" />
                    <path d="M18 20a2 2 0 0 1-2-2c0-2.25 2-4.5 2-4.5s2 2.25 2 4.5a2 2 0 0 1-2 2z" />
                    <path d="M17.7 13.4a6 6 0 0 0-1.7-4.4" />
                    <path d="M8 13.5a6 6 0 0 1-1.7-4.5" />
                    <path d="M12 4a2 2 0 0 1 2 2c0 2.25-2 4.5-2 4.5s-2-2.25-2-4.5a2 2 0 0 1 2-2z" />
                  </svg> */}
                  <img
                    src="/codechef.png"
                    alt="codechef Logo"
                    className="w-6 h-6"
                  />
                </CardHeader>
                <CardContent>
                  <CardDescription>View my CodeChef profile and submissions</CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://leetcode.com/u/yeoleSarthak/" target="_blank" rel="noopener noreferrer">
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-bold">LeetCode</CardTitle>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg> */}
                  <img
                    src="/leetcode.png"
                    alt="Leetcode Logo"
                    className="w-6 h-6"
                    />
                </CardHeader>
                <CardContent>
                  <CardDescription>View my LeetCode profile and submissions</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                I'm Sarthak Yeole, a second-year CSE student at the Indian Institute of Information Technology,
                Jabalpur, passionate about Competitive Programming, backend engineering, Web3, and cloud technologies.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                I enjoy solving complex problems and building scalable applications. My technical journey is driven by
                curiosity and a desire to create impactful solutions.
              </p>
            </div>
            <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-muted flex items-center justify-center">
              <img
                src="/SarthakPic.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>BSOC Contributor</CardTitle>
                <CardDescription>May 2024 - July 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Contributed to BitByte Summer of Code (BSoC), an open-source program organized by the Programming Club of IIIT Jabalpur.
                  Worked on real-world projects and collaborated with developers to improve open-source software.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Winner – InnoWave Business Hackathon, IIT Roorkee </CardTitle>
                <CardDescription>March 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  🏆 Winner of InnoWave, a business hackathon held during Cognizance, the annual tech fest of IIT Roorkee.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Winner – CanYouHackIt Hackathon, IIIT Jabalpur</CardTitle>
                <CardDescription>September 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  🏆 Secured first place in CanYouHackIt, a flagship hackathon organized by the Programming Club of IIIT Jabalpur.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Core Member – Technical Programming Club (TPC), IIIT Jabalpur</CardTitle>
                <CardDescription>July 2024 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Actively contributed to organizing and mentoring events like coding contests, open-source programs, and hackathons.
                  Played a key role in outreach, and fostering a coding culture on campus.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🚀 Organizer – HackByte 3.0 (MLH Member Hackathon), IIIT Jabalpur</CardTitle>
                <CardDescription>April 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Led the planning and execution of HackByte 3.0, an MLH Member Hackathon hosted by IIIT Jabalpur.
                  Managed end-to-end logistics, sponsors partnerships, and community engagement for a large-scale national tech event.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Languages, Frameworks, and Databases</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Python</Badge>
                <Badge>Java</Badge>
                <Badge>C++</Badge>
                <Badge>C</Badge>
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>MongoDB</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MySQL</Badge>
                <Badge>GO</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Operating Systems</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Windows</Badge>
                <Badge>Linux</Badge>
                <Badge>Ubuntu</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Tools & Software</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Git</Badge>
                <Badge>GitHub</Badge>
                <Badge>VS Code</Badge>
                <Badge>Postman</Badge>
                <Badge>Figma</Badge>
                <Badge>Firebase</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Project One</CardTitle>
                  <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
                <CardDescription>Web Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A description of your first project. Explain what technologies you used and what problems you solved.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Project Two</CardTitle>
                  <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
                <CardDescription>Mobile Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A description of your second project. Explain what technologies you used and what problems you solved.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Redux</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Project Three</CardTitle>
                  <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
                <CardDescription>Backend API</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A description of your third project. Explain what technologies you used and what problems you solved.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Project Four</CardTitle>
                  <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
                <CardDescription>Web3 Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A description of your fourth project. Explain what technologies you used and what problems you solved.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Solidity</Badge>
                  <Badge variant="outline">Ethers.js</Badge>
                  <Badge variant="outline">Next.js</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 9309079661</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>sarthakyeole025@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Twitter className="h-5 w-5 text-primary" />
                <Link href="https://twitter.com/sarthak_4744" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  @sarthak_yeole
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <Link
                  href="https://www.linkedin.com/in/sarthak-yeole-399a93297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/sarthak-yeole
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <Link href="https://github.com/sarthakyeole" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/sarthak-yeole
                </Link>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form below to get in touch with me.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Sarthak Yeole | Hosted on Vercel
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/sarthakyeole" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/sarthak-yeole-399a93297/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com/sarthak_4744" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
